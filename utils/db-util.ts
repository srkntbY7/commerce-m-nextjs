import { MongoClient } from 'mongodb';

export async function connectDB() {
  console.log('CLIENT----------------------', process.env.MONGO);
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
  console.log('categoryName', categoryName);
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
  var reg = new RegExp(regex1);

  const db = client.db();
  const catProducts = db
    .collection(collection)
    .find({ catId: { $elemMatch: { $regex: reg } } })
    .toArray();

  return catProducts;
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
    ])
    .toArray();
  return productData;
}
