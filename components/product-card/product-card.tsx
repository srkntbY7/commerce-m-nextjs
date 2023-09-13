import Image from 'next/image';
import { ProductTitle, ProductName, ProductPrice } from './product-card.styles';
import Link from 'next/link';
const ProductCard = ({
  productImg,
  productTitle,
  productName,
  productPrice,
  designer,
  productId,
}: {
  productImg: string;
  productTitle: string;
  productName: string;
  productPrice: number;
  designer: string;
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
    <Link
      href={`/products/${stringToSlug(designer)}/${stringToSlug(
        productName
      )}/${productId}`}
    >
      <Image src={productImg} alt={productTitle} width={357} height={476} />
      <ProductTitle>{productTitle}</ProductTitle>
      <ProductName>{productName}</ProductName>
      <ProductPrice>£{productPrice}</ProductPrice>
    </Link>
  );
};

export default ProductCard;
