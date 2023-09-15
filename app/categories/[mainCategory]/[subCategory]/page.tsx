import CategoryCarousel from '@/components/category-carousel/category-carousel';
import CategoryHeader from '@/components/category-header/category-header';
import CategoryPagination from '@/components/category-pagination/category-pagination';
import CategoryProducts from '@/components/category-products/category-products';

export default async function MainCategoryPage({
  params,
}: {
  params: { mainCategory: string; subCategory: string };
}) {
  const mainCategoryName = params.mainCategory;
  const subCategoryName = params.subCategory;

  return (
    <>
      <CategoryHeader />
      <CategoryCarousel />
      <CategoryProducts
        mainCategoryName={mainCategoryName}
        subCategoryName={subCategoryName}
      />
      <CategoryPagination />
    </>
  );
}
