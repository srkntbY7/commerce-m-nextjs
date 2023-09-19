import ProductCarousel from '@/components/product-carousel/product-carousel';
import { PageContainer } from '@/ui/page-container/page-container.styles';
import ProductHeader from '@/components/product-header/product-header';
import ProductInformation from '@/components/product-information/product-information';

type productData = {
  productName: string;
  designerName: string;
  price: number;
  stock: { stock: number; _id: string; name: string }[];
  media: string[];
  color: string;
  moreColors: { productId: string; name: string; current: boolean }[];
  descriptions: {
    desc_title: string;
    desc_text: {
      contenttype: 'paragraph' | 'list';
      content: string[];
      _id: string;
    }[];
    desc_open: boolean;
    _id: string;
  }[];
};

async function getProductInfo(
  productId: string
): Promise<{ productData: [productData] }> {
  const res = await fetch(`http://localhost:3000/api/product/${productId}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: { productSlug: string[] };
}) {
  const productSlug = params.productSlug;
  const productIdCandidate = productSlug[productSlug.length - 1];
  let productId = '';

  if (Array.isArray(productSlug)) {
    let isNum = /^\d+$/.test(productIdCandidate);
    if (isNum) {
      productId = productIdCandidate;
    }
  }

  let productInfo = await getProductInfo(productId);
  console.log('productInfo:', productInfo);
  const product = productInfo.productData[0];

  return {
    title: `${product.designerName.toUpperCase()} - ${product.productName}`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: { productSlug: string[] };
}) {
  const productSlug = params.productSlug;
  const productIdCandidate = productSlug[productSlug.length - 1];
  let productId = '';

  if (Array.isArray(productSlug)) {
    let isNum = /^\d+$/.test(productIdCandidate);
    if (isNum) {
      productId = productIdCandidate;
    }
  }
  console.log('productId', productId);

  let productInfo = await getProductInfo(productId);
  console.log('productInfo:', productInfo);
  const product = productInfo.productData[0];

  const stringToSlug = (str: string): string => {
    return str
      .trim()
      .toLowerCase()
      .replace(/[\W_]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const productUrlSlug = `${stringToSlug(product.designerName)}/${stringToSlug(
    product.productName
  )}`;
  return (
    <PageContainer>
      <ProductCarousel media={product.media} />
      <ProductHeader
        productName={product.productName}
        designer={product.designerName}
        price={product.price}
        error={null}
      />
      <ProductInformation
        stock={product.stock}
        descriptions={product.descriptions}
        color={product.color}
        moreColors={product.moreColors}
        urlSlug={productUrlSlug}
      />
    </PageContainer>
  );
}
