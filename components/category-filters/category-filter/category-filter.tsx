'use client';
import { useState } from 'react';
import {
  FilterContainer,
  FilterHeading,
  FilterTitle,
  SelectedFilter,
  FilterList,
  FilterListItem,
  FilterListItemName,
} from './category-filter.styles';
import ArrowVertical from '@/ui/arrow-vertical/arrow-vertical';
import Link from 'next/link';

interface ICategoryFilters {
  catId: string;
  catName: string;
}

const CategoryFilter = (props: {
  filters: Record<string, any>[];
  catTitle: string;
  catKey: string;
  catName: string;
  urlCat: string[];
  catType: string;
}) => {
  const { filters, catTitle, catKey, catName, urlCat, catType } = props;

  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <FilterContainer>
      <FilterHeading onClick={toggleOpen}>
        <FilterTitle>{catTitle}</FilterTitle>
        <SelectedFilter>All</SelectedFilter>
        <ArrowVertical type='right' open={open} />
      </FilterHeading>
      <FilterList open={open}>
        <FilterListItem selected={true}>
          <Link href={`/categories/${catTitle}`}>
            <FilterListItemName>All</FilterListItemName>
          </Link>
        </FilterListItem>
        {filters.map((filter) => (
          <FilterListItem
            selected={urlCat[0] === filter[catName]}
            key={filter[catKey]}
          >
            {catType === 'main' ? (
              <Link href={`/categories/${filter[catName]}`}>
                <FilterListItemName>{filter[catName]}</FilterListItemName>
              </Link>
            ) : catType === 'sub' ? (
              <Link href={`/categories/`}>
                <FilterListItemName>{filter[catName]}</FilterListItemName>
              </Link>
            ) : (
              <Link href={`/categories/`}>
                <FilterListItemName>{filter[catName]}</FilterListItemName>
              </Link>
            )}
          </FilterListItem>
        ))}
      </FilterList>
    </FilterContainer>
  );
};

export default CategoryFilter;
