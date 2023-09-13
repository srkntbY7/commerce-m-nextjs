import {
  CategoryHeaderContainer,
  CategoryHeading,
  CategoryTextContent,
} from './category-header.styles';

const CategoryHeader = () => {
  return (
    <CategoryHeaderContainer>
      <CategoryHeading>Clothing</CategoryHeading>
      <CategoryTextContent>
        Category Text Build your new-season wardrobe with the latest designer
        coats & jackets, knitwear, sweats and smart tailoring, with everyday
        essentials such as T-shirts, casual shirts, trousers and denim jeans.
        Don’t forget to check out our shoe selection, too, where you’ll find
        loafers, boots, sneakers and more.
      </CategoryTextContent>
    </CategoryHeaderContainer>
  );
};

export default CategoryHeader;
