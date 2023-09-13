import {
  ProductHeaderContainer,
  ProductHeadingDesigner,
  ProductHeadingName,
  ProductHeadingPrice,
} from './product-header.styles';

const ProductHeader = ({
  productName,
  designer,
  price,
  error,
}: {
  productName: string;
  designer: string;
  price: number;
  error: Error | null;
}) => {
  return (
    <ProductHeaderContainer>
      <ProductHeadingDesigner>{designer}</ProductHeadingDesigner>
      <ProductHeadingName>{productName}</ProductHeadingName>
      <ProductHeadingPrice>£{price}</ProductHeadingPrice>
    </ProductHeaderContainer>
  );
};

export default ProductHeader;
