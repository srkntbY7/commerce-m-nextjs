import ProductCard from '../product-card/product-card';

import { ProductCardsContainer } from './product-cards.styles';
import { ICategoryProduct } from '@/components/product-cards/IProducts';

const ProductCards = (props: { products: ICategoryProduct[] }) => {
  const { products } = props;

  console.log('productsinPrCards', products);

  return (
    <ProductCardsContainer>
      {products.map((product) => (
        <ProductCard
          key={product.productId}
          designerName={product.designerName}
          productName={product.productName}
          productTitle={product.designerName}
          productImg={`/images/${product.productId}_${product.media[0]}_2000.jpg`}
          productId={product.productId}
          productPrice={product.price}
        />
      ))}
      <ProductCard
        productImg='/images/203822084_in_2000.jpg'
        productTitle='visvim'
        productName='Jumbo Cotton-Jersey T-Shirt'
        productPrice={160}
        designerName='designer'
        productId='203822084'
      />
      <ProductCard
        productImg='/images/product-002.jpg'
        productTitle='visvim'
        productName='Jumbo Cotton-Jersey T-Shirt'
        productPrice={90}
        designerName='designer'
        productId='203822084'
      />
      <ProductCard
        productImg='/images/product-003.jpg'
        productTitle='visvim'
        productName='Jumbo Cotton-Jersey T-Shirt'
        productPrice={220}
        designerName='designer'
        productId='203822084'
      />
      <ProductCard
        productImg='/images/product-004.jpg'
        productTitle='visvim'
        productName='Jumbo Cotton-Jersey T-Shirt'
        productPrice={180}
        designerName='designer'
        productId='203822084'
      />
      <ProductCard
        productImg='/images/product-001.jpg'
        productTitle='visvim'
        productName='Jumbo Cotton-Jersey T-Shirt'
        productPrice={180}
        designerName='designer'
        productId='203822084'
      />
      <ProductCard
        productImg='/images/product-002.jpg'
        productTitle='visvim'
        productName='Jumbo Cotton-Jersey T-Shirt'
        productPrice={180}
        designerName='designer'
        productId='203822084'
      />
      <ProductCard
        productImg='/images/product-003.jpg'
        productTitle='visvim'
        productName='Jumbo Cotton-Jersey T-Shirt'
        productPrice={180}
        designerName='designer'
        productId='203822084'
      />
    </ProductCardsContainer>
  );
};

export default ProductCards;
