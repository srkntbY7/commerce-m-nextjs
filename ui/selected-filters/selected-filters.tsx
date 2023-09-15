'use client';
import { SelectedFiltersContainer } from './selected-filters.styles';
import { usePathname, useSearchParams } from 'next/navigation';
const SelectedFilters = () => {
  const searchParams = useSearchParams()!;
  const pathname = usePathname();

  const searchParamSubCategory = searchParams.getAll('sc');
  const searchParamsDesigner = searchParams.getAll('designer');
  const searchParamsColor = searchParams.getAll('color');
  const searchParamsSizes = searchParams.getAll('size');

  console.log('pathname', pathname);
  console.log('searchParamSubCategory', searchParamSubCategory);

  return <SelectedFiltersContainer>Selected Filters</SelectedFiltersContainer>;
};

export default SelectedFilters;
