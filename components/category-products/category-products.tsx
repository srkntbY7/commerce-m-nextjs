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

  const categoryProducts = await getCatProducts();
  console.log('categoryProducts', categoryProducts);
  return (
    <CategoryProductsContainer>
      <Filters />
      <ProductCards products={categoryProducts.catProducts} />
    </CategoryProductsContainer>
  );
};

export default CategoryProducts;
