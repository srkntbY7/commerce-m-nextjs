import Image from 'next/image';
import {
  LinkContainer,
  ProductTitle,
  ProductName,
  ProductPrice,
} from './product-card.styles';
import Link from 'next/link';
const ProductCard = ({
  productImg,
  productTitle,
  productName,
  productPrice,
  designerName,
  productId,
}: {
  productImg: string;
  productTitle: string;
  productName: string;
  productPrice: number;
  designerName: string;
  productId: string;
}) => {
  const stringToSlug = (str: string): string => {
    return str
      .trim()
      .toLowerCase()
      .replace(/[\W_]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };
  return (
    <LinkContainer>
      <Link
        href={`/products/${stringToSlug(designerName)}/${stringToSlug(
          productName
        )}/${productId}`}
      >
        <Image src={productImg} alt={productTitle} width={357} height={476} />
        <ProductTitle>{productTitle}</ProductTitle>
        <ProductName>{productName}</ProductName>
        <ProductPrice>£{productPrice}</ProductPrice>
      </Link>
    </LinkContainer>
  );
};

export default ProductCard;
