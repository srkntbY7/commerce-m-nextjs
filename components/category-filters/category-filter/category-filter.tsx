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
import FilterItemAll from './filter-item-all/filter-item-all';

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

  return (
    <FilterContainer>
      <FilterHeading onClick={toggleOpen}>
        <FilterTitle>{catTitle}</FilterTitle>
        <SelectedFilter>
          {Array.isArray(selectedCat) && selectedCat.length > 0
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
        <FilterListItem
          selected={Array.isArray(selectedCat) && selectedCat.length === 0}
        >
          <FilterItemAll mainCat={mainCat} catType={catType} />
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
