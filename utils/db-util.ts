import { MongoClient } from 'mongodb';

export async function connectDB() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.hqfur0g.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
  );

  return client;
}

export async function getCategoryId(
  client: MongoClient,
  collection: string,
  categoryName: string
) {
  //console.log('categoryName', categoryName);
  const db = client.db();
  const category = db.collection(collection).findOne({ catName: categoryName });

  return category;
}

export async function getCategoryProducts(
  client: MongoClient,
  collection: string,
  categoryId: string
) {
  const regex1 = `^${categoryId}`;
  const reg = new RegExp(regex1);

  const db = client.db();
  const catProducts = db
    .collection(collection)
    //.find({ catId: { $elemMatch: { $regex: reg } } })
    .aggregate([
      {
        $match: {
          catId: { $elemMatch: { $regex: reg } },
        },
      },
      {
        $lookup: {
          from: 'designers',
          localField: 'designer',
          foreignField: 'designerId',
          as: 'designerInfo',
        },
      },
      {
        $replaceRoot: {
          newRoot: {
            $mergeObjects: [
              '$$ROOT',
              { designerName: { $arrayElemAt: ['$designerInfo.designer', 0] } },
            ],
          },
        },
      },
      {
        $project: {
          designerInfo: 0,
        },
      },
    ])
    .toArray();

  return catProducts;
}

export async function getCategoryTextContent(
  client: MongoClient,
  categoryId: string
) {
  const db = client.db();
  const catContent = db.collection('category_content');
  const result = await catContent.findOne({ catId: categoryId });
  if (!result) {
    return { categortContent: {} };
  }
  return result;
}

export async function getProductData(
  client: MongoClient,
  collection: string,
  productId: string
) {
  const db = client.db();
  //const productData = db.collection(collection).findOne({ productId });
  const productData = db
    .collection(collection)
    .aggregate([
      {
        $match: {
          productId: productId,
        },
      },
      {
        $lookup: {
          from: collection,
          localField: 'productGroupId',
          foreignField: 'productGroupId',
          as: 'groupedProducts',
        },
      },
      {
        $lookup: {
          from: 'designers',
          localField: 'designer',
          foreignField: 'designerId',
          as: 'designerInfo',
        },
      },
      {
        $addFields: {
          moreColors: {
            $map: {
              input: '$groupedProducts',
              as: 'grouped',
              in: {
                productId: '$$grouped.productId',
                name: '$$grouped.color',
                current: {
                  $cond: {
                    if: { $eq: ['$color', '$$grouped.color'] },
                    then: true,
                    else: false,
                  },
                },
              },
            },
          },
        },
      },
      {
        $replaceRoot: {
          newRoot: {
            $mergeObjects: [
              '$$ROOT',
              { designerName: { $arrayElemAt: ['$designerInfo.designer', 0] } },
            ],
          },
        },
      },
      {
        $project: {
          groupedProducts: 0,
          designerInfo: 0,
        },
      },
    ])
    .toArray();
  return productData;
}

export async function getCategoryFilters(
  client: MongoClient,
  collection: string,
  categoryId: string
) {
  const db = client.db();

  const query1 = { catId: /^1[^.]*\.[^.]*$/ };
  //const query2 = { catId: /^1[^.]*\.[^.]*\.[^.]*$/ }; //starting with 1.
  const query3 = { catId: /^1\.1\.[^.]*$/ };

  const result1 = await db.collection(collection).find(query1).toArray();
  //const result2 = await db.collection(collection).find(query2).toArray();
  const result3 = await db.collection(collection).find(query3).toArray();

  let mainCatHandle = '',
    subCatHandle = '';

  const catDeepness = categoryId.split('.').length - 1;
  //console.log('catDeepness', categoryId);

  mainCatHandle = categoryId.split('.')[0];
  const regexMainCat = `^${mainCatHandle}[^.]*\.[^.]*$`;
  const regMainCat = new RegExp(regexMainCat);
  const queryMainCat = { catId: { $regex: regMainCat } };
  const resultMainCat = await db
    .collection(collection)
    .find(queryMainCat)
    .toArray();

  let resultSubCat = null;
  if (catDeepness >= 1) {
    subCatHandle = categoryId.split('.')[1];
    const regexSubCat = `^${mainCatHandle}\.${subCatHandle}\.[^.]*$`;
    const regSubCat = new RegExp(regexSubCat);
    const querySubCat = { catId: { $regex: regSubCat } };
    resultSubCat = await db.collection(collection).find(querySubCat).toArray();
  }

  const regexCatProducts = `^${categoryId}`;
  const reg = new RegExp(regexCatProducts);
  const resultDesigners = await db
    .collection('products')
    .aggregate([
      {
        $match: {
          catId: { $elemMatch: { $regex: reg } },
        },
      },
      {
        $lookup: {
          from: 'designers',
          localField: 'designer',
          foreignField: 'designerId',
          as: 'designerInfo',
        },
      },
      {
        $unwind: '$designerInfo',
      },
      {
        $group: {
          _id: null,
          designers: {
            $addToSet: {
              designerName: '$designerInfo.designer',
              designerId: '$designerInfo.designerId',
            },
          },
        },
      },
    ])
    .toArray();

  const resultColors = await db
    .collection('products')
    .aggregate([
      {
        $match: {
          catId: { $elemMatch: { $regex: reg } },
        },
      },
      {
        $group: {
          _id: null,
          colors: { $addToSet: { colorName: '$colorgroup' } },
        },
      },
    ])
    .toArray();

  const resultSizes = await db
    .collection('products')
    .aggregate([
      {
        $lookup: {
          from: 'sizes',
          localField: 'sizeGroup',
          foreignField: 'sizeGroup',
          as: 'sizeInfo',
        },
      },
      {
        $unwind: '$sizeInfo',
      },
      {
        $group: {
          _id: '$sizeInfo.sizeGroup',
          sizes: { $addToSet: '$sizeInfo.sizes' },
        },
      },
      {
        $project: {
          _id: 0,
          sizeGroup: '$_id',
          sizes: 1,
        },
      },
    ])
    .toArray();

  const filters = [
    { mainCategoryFilters: resultMainCat },
    { subCategoryFilters: resultSubCat },
    { designerFilters: resultDesigners },
    { colorFilters: resultColors },
    { sizeFilters: resultSizes },
  ];

  return filters;
}
