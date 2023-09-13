import SelectedFilters from '@/ui/selected-filters/selected-filters';
import ProductCard from '../product-card/product-card';

import { ProductCardsContainer } from './product-cards.styles';
import { ICategoryProduct } from '@/components/product-cards/IProducts';

const ProductCards = (props: { products: ICategoryProduct[] }) => {
  const { products } = props;

  console.log('productsinPrCards', products);

  return (
    <ProductCardsContainer>
      <SelectedFilters />
      {products.map((product) => (
        <ProductCard
          key={product.productId}
          designer={product.designer}
          productName={product.productName}
          productTitle={product.designer}
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
        designer='designer'
        productId='203822084'
      />
      <ProductCard
        productImg='/images/product-002.jpg'
        productTitle='visvim'
        productName='Jumbo Cotton-Jersey T-Shirt'
        productPrice={90}
        designer='designer'
        productId='203822084'
      />
      <ProductCard
        productImg='/images/product-003.jpg'
        productTitle='visvim'
        productName='Jumbo Cotton-Jersey T-Shirt'
        productPrice={220}
        designer='designer'
        productId='203822084'
      />
      <ProductCard
        productImg='/images/product-004.jpg'
        productTitle='visvim'
        productName='Jumbo Cotton-Jersey T-Shirt'
        productPrice={180}
        designer='designer'
        productId='203822084'
      />
      <ProductCard
        productImg='/images/product-001.jpg'
        productTitle='visvim'
        productName='Jumbo Cotton-Jersey T-Shirt'
        productPrice={180}
        designer='designer'
        productId='203822084'
      />
      <ProductCard
        productImg='/images/product-002.jpg'
        productTitle='visvim'
        productName='Jumbo Cotton-Jersey T-Shirt'
        productPrice={180}
        designer='designer'
        productId='203822084'
      />
      <ProductCard
        productImg='/images/product-003.jpg'
        productTitle='visvim'
        productName='Jumbo Cotton-Jersey T-Shirt'
        productPrice={180}
        designer='designer'
        productId='203822084'
      />
    </ProductCardsContainer>
  );
};

export default ProductCards;