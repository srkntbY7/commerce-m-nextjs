import FirstPageButton from '@/ui/pagination/first-page-botton/first-page-button';
import { CategoryPaginationContainer } from './category-pagination.styles';
import LastPageButton from '@/ui/pagination/last-page-button/last-page-button';
import NextPageButton from '@/ui/pagination/nex-page-button/nex-page-button';
import PrevPageButton from '@/ui/pagination/prev-page-button/prev-page-button';
import PaginationCurrentPage from '@/ui/pagination/current-page/current-page';
const CategoryPagination = () => {
  return (
    <CategoryPaginationContainer>
      <FirstPageButton />
      <PrevPageButton />
      <PaginationCurrentPage />
      <NextPageButton />
      <LastPageButton />
    </CategoryPaginationContainer>
  );
};

export default CategoryPagination;
