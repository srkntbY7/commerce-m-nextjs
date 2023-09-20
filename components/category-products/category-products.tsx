import SelectedFilters from '@/ui/selected-filters/selected-filters';
import Filters from '../category-filters/category-filters';
import ProductCards from '../product-cards/product-cards';
import {
  CategoryProductsContainer,
  CategoryProductArea,
} from './category-products.styles';

const CategoryProducts = async (props: {
  mainCategoryName: string;
  subCategoryName: string | null;
}) => {
  const { mainCategoryName, subCategoryName } = props;

  const apiUrl = subCategoryName ? subCategoryName : mainCategoryName;

  async function getCatProducts() {
    const res = await fetch(`http://localhost:3000/api/category/${apiUrl}`);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  }

  async function getFilters() {
    const res = await fetch(
      `http://localhost:3000/api/category/filters/${apiUrl}`
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

  let designers = [],
    colorFilters = [];
  if (filters.filters[2].designerFilters.length) {
    designers = filters.filters[2].designerFilters[0].designers;
  }
  if (filters.filters[3].colorFilters.length) {
    colorFilters = filters.filters[3].colorFilters[0].colors;
  }

  return (
    <CategoryProductsContainer>
      <Filters
        mainCategoryName={mainCategoryName}
        subCategoryName={subCategoryName}
        mainCatFilters={filters.filters[0].mainCategoryFilters}
        subCatFilters={filters.filters[1].subCategoryFilters}
        designerFilters={designers}
        colorFilters={colorFilters}
        sizeFilters={filters.filters[4].sizeFilters}
      />
      <CategoryProductArea>
        <SelectedFilters />
        <ProductCards products={categoryProducts.catProducts} />
      </CategoryProductArea>
    </CategoryProductsContainer>
  );
};

export default CategoryProducts;
