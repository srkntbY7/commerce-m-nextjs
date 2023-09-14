import { SelectionContainer } from './selection.styles';
import Link from 'next/link';
const Selection = ({
  option,
  urlSlug,
}: {
  option: {
    name: string;
    current?: boolean;
    stock?: number;
    productId?: string;
  };
  urlSlug?: string;
}) => {
  return (
    <SelectionContainer
      $active={option.current === true ? true : false}
      $outofstock={option.stock === 0 ? true : false}
    >
      {option.productId !== null && (
        <Link href={`/products/${urlSlug}/${option.productId}`}></Link>
      )}
      {option.name}
    </SelectionContainer>
  );
};

export default Selection;
