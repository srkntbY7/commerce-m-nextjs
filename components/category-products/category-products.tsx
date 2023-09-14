import Filters from '../category-filters/category-filters';
import ProductCards from '../product-cards/product-cards';
import { CategoryProductsContainer } from './category-products.styles';

const CategoryProducts = async (props: { categoryName: string[] }) => {
  const { categoryName } = props;

  async function getCatProducts() {
    const res = await fetch(
      `http://localhost:3000/api/category/${categoryName}`
    );
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  }

  async function getFilters() {
    const res = await fetch(
      `http://localhost:3000/api/category/filters/${categoryName}`
    );
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  }

  const categoryProducts = await getCatProducts();
  const filters = await getFilters();

  console.log('categoryProducts', categoryProducts);
  console.log('allFilters', filters);
  return (
    <CategoryProductsContainer>
      <Filters
        mainCatFilters={filters.filters[0].mainCategoryFilters}
        subCatFilters={filters.filters[1].subCategoryFilters}
        designerFilters={filters.filters[2].designerFilters[0].designers}
        colorFilters={filters.filters[3].colorFilters[0].colors}
        sizeFilters={filters.filters[4].sizeFilters}
      />
      <ProductCards products={categoryProducts.catProducts} />
    </CategoryProductsContainer>
  );
};

export default CategoryProducts;
