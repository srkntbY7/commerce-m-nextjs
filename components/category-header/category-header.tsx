import {
  CategoryHeaderContainer,
  CategoryHeading,
  CategoryTextContent,
} from './category-header.styles';

const CategoryHeader = async (props: {
  mainCategoryName: string;
  subCategoryName: string | null;
  catContent: string | null;
}) => {
  const { mainCategoryName, subCategoryName, catContent } = props;

  return (
    <CategoryHeaderContainer>
      <CategoryHeading>
        {subCategoryName ? subCategoryName : mainCategoryName}
      </CategoryHeading>
      <CategoryTextContent>{catContent}</CategoryTextContent>
    </CategoryHeaderContainer>
  );
};

export default CategoryHeader;
