import { render, screen, within } from '@testing-library/react';
import ProductCard from '@/components/product-card/product-card';

test('should show product designer, price, title and image', () => {
  const product = {
    productId: '1693677448631985',
    designerName: 'massimo alba',
    productTitle: 'massimo alba collections',
    productName: 'Linen and Cotton-Blend Henley T-Shirt',
    price: 105,
    productImg: '1693677448631985',
  };

  render(
    <ProductCard
      key={product.productId}
      designerName={product.designerName}
      productName={product.productName}
      productTitle={product.productTitle}
      productImg={`/images/${product.productId}_in_2000.jpg`}
      productId={product.productId}
      productPrice={product.price}
    />
  );

  // find and expect product title
  const productTitle = screen.getByText(/massimo alba collections/i);
  expect(productTitle).toBeInTheDocument();

  // find and expect product price
  const productPrice = screen.getByText(/105/i);
  expect(productPrice).toBeInTheDocument();

  // find and expect product name
  const productName = screen.getByText(
    /Linen and Cotton-Blend Henley T-Shirt/i
  );
  expect(productName).toBeInTheDocument();

  //find and expect productImage
  const productImg = screen.getByRole('img', {
    name: /massimo alba collections/i,
  });
  expect(productImg).toBeInTheDocument();
});
