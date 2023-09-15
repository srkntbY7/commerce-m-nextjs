'use client';
import { useState } from 'react';
import Link from 'next/link';

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

import FilterItem from './filter-item/filter-item';

const CategoryFilter = (props: {
  filters: Record<string, any>[];
  catTitle: string;
  catKey: string;
  catName: string;
  mainCat: string;
  subCat: string | null;
  catType: 'main' | 'sub' | 'designer' | 'color' | 'size';
  selectedCat: string[] | null;
}) => {
  const {
    filters,
    catTitle,
    catKey,
    catName,
    mainCat,
    subCat,
    catType,
    selectedCat,
  } = props;

  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  //console.log('pathname', new URLSearchParams(searchParams).has('sc', '1.1.6'));

  //http://localhost:3000/categories/clothing/t-shirts?sc=1.1.2&sc=1.1.3&designer=6502b778b420863628092756&color=black&color=neutrals&size=xs&size=m&size=5

  return (
    <FilterContainer>
      <FilterHeading onClick={toggleOpen}>
        <FilterTitle>{catTitle}</FilterTitle>
        <SelectedFilter>
          {Array.isArray(selectedCat)
            ? filters
                .map((filter) =>
                  selectedCat.filter((cat) => cat === filter[catKey]).length > 0
                    ? filter[catName]
                    : null
                )
                .filter((f) => f)
                .join(', ')
            : 'All'}
        </SelectedFilter>
        <ArrowVertical type='right' open={open} />
      </FilterHeading>
      <FilterList open={open}>
        <FilterListItem selected={selectedCat === null}>
          <Link href={`/categories/${catTitle}`}>
            <FilterListItemName>All</FilterListItemName>
          </Link>
        </FilterListItem>
        {filters.map((filter) => (
          <FilterListItem
            selected={
              Array.isArray(selectedCat)
                ? selectedCat.filter((cat) => cat === filter[catKey]).length > 0
                : false
            }
            key={filter[catKey]}
          >
            <FilterItem
              mainCat={mainCat}
              catType={catType}
              catName={filter[catName]}
              catKey={filter[catKey]}
            />
          </FilterListItem>
        ))}
      </FilterList>
    </FilterContainer>
  );
};

export default CategoryFilter;
