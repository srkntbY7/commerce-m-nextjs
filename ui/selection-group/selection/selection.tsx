import { SelectionContainer, SelectionButton } from './selection.styles';
import Link from 'next/link';
const Selection = ({
  name,
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
  name: string;
}) => {
  //console.log('option--', option);
  return name === 'colour' ? (
    <SelectionContainer
      $active={option.current === true ? true : false}
      $outofstock={option.stock === 0 ? true : false}
    >
      {option.productId !== null && (
        <Link href={`/products/${urlSlug}/${option.productId}`}></Link>
      )}
      {option.name}
    </SelectionContainer>
  ) : (
    <SelectionContainer
      $active={option.current === true ? true : false}
      $outofstock={option.stock === 0 ? true : false}
    >
      {option.productId !== null && <SelectionButton></SelectionButton>}
      {option.name}
    </SelectionContainer>
  );
};

export default Selection;
