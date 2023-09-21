import CategoryCarousel from '@/components/category-carousel/category-carousel';
import CategoryHeader from '@/components/category-header/category-header';
import CategoryPagination from '@/components/category-pagination/category-pagination';
import CategoryProducts from '@/components/category-products/category-products';

export default async function MainCategoryPage({
  params,
}: {
  params: { mainCategory: string };
}) {
  const mainCategoryName = params.mainCategory;

  const apiUrl = mainCategoryName;

  async function getCatContent() {
    const res = await fetch(
      `http://localhost:3000/api/category/textcontent/${apiUrl}`
    );
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  }

  const categoryTextContent = await getCatContent();

  return (
    <>
      <CategoryHeader
        mainCategoryName={mainCategoryName}
        subCategoryName={null}
        catContent={categoryTextContent.catContent.catText}
      />
      <CategoryCarousel catMedia={categoryTextContent.catContent.catMedia} />
      <CategoryProducts
        mainCategoryName={mainCategoryName}
        subCategoryName={null}
      />
      <CategoryPagination />
    </>
  );
}
