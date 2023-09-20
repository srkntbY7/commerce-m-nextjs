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
    </ProductCardsContainer>
  );
};

export default ProductCards;
