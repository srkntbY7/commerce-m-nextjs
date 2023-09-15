'use client';
import { useState } from 'react';
import {
  FiltersContainer,
  FilterContainer,
  FilterHeading,
  FilterTitle,
  SelectedFilter,
  FilterList,
  FilterListItem,
  FilterListItemName,
} from './category-filters.styles';
import ArrowVertical from '@/ui/arrow-vertical/arrow-vertical';
import Link from 'next/link';

interface ICategoryFilters {
  catId: string;
  catName: string;
}

interface IDesignerFilters {
  designerId: string;
  designerName: string;
}

interface IColorFilters {
  colorName: string;
}

interface ISizeFilters {
  sizeGroup: string;
  sizes: ISizes[][];
}
interface ISizes {
  size: string;
  order: number;
}

import CategoryFilter from './category-filter/category-filter';

const Filters = (props: {
  categoryName: string[];
  mainCatFilters: ICategoryFilters[];
  subCatFilters: ICategoryFilters[] | null;
  designerFilters: IDesignerFilters[];
  colorFilters: IColorFilters[];
  sizeFilters: ISizeFilters[];
}) => {
  const {
    categoryName,
    mainCatFilters,
    subCatFilters,
    designerFilters,
    colorFilters,
    sizeFilters,
  } = props;
  console.log('sizeFilters', sizeFilters);
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <FiltersContainer>
      <CategoryFilter
        filters={mainCatFilters}
        catTitle='Category'
        catKey='catId'
        catName='catName'
        urlCat={categoryName}
        catType='main'
      />
      {subCatFilters && (
        <CategoryFilter
          filters={subCatFilters}
          catTitle='Sub Category'
          catKey='catId'
          catName='catName'
          urlCat={categoryName}
          catType='sub'
        />
      )}

      <CategoryFilter
        filters={designerFilters}
        catTitle='Designer'
        catKey='designerId'
        catName='designerName'
        urlCat={categoryName}
        catType='designer'
      />

      <CategoryFilter
        filters={colorFilters}
        catTitle='Color'
        catKey='colorName'
        catName='colorName'
        urlCat={categoryName}
        catType='color'
      />

      {sizeFilters.map((sizeFilter) => (
        <CategoryFilter
          key={sizeFilter.sizeGroup}
          filters={sizeFilter.sizes[0]}
          catTitle={`${sizeFilter.sizeGroup} Size`}
          catKey='order'
          catName='size'
          urlCat={categoryName}
          catType='size'
        />
      ))}
    </FiltersContainer>
  );
};

export default Filters;
