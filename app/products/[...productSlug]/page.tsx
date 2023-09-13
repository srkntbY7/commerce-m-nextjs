import ProductCarousel from '@/components/product-carousel/product-carousel';
import { PageContainer } from '@/ui/page-container/page-container.styles';
import ProductHeader from '@/components/product-header/product-header';
import ProductInformation from '@/components/product-information/product-information';

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

  async function getProductData() {
    const res = await fetch(`http://localhost:3000/api/product/${productId}`);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  }

  let productData = await getProductData();
  productData = productData.productData[0];
  console.log('productData:::', productData);

  const stringToSlug = (str: string): string => {
    return str
      .trim()
      .toLowerCase()
      .replace(/[\W_]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const productUrlSlug = `${stringToSlug(productData.designer)}/${stringToSlug(
    productData.productName
  )}`;
  return (
    <PageContainer>
      <ProductCarousel media={productData.media} />
      <ProductHeader
        productName={productData.productName}
        designer={productData.designer}
        price={productData.price}
        error={null}
      />
      <ProductInformation
        stock={productData.stock}
        descriptions={productData.descriptions}
        color={productData.color}
        moreColors={productData.moreColors}
        urlSlug={productUrlSlug}
      />
    </PageContainer>
  );
}
