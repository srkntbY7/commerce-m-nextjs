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

const Filters = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <FiltersContainer>
      <FilterContainer>
        <FilterHeading onClick={toggleOpen}>
          <FilterTitle>Category</FilterTitle>
          <SelectedFilter>T-shirts</SelectedFilter>
          <ArrowVertical placement='right' open={open} />
        </FilterHeading>
        <FilterList open={open}>
          <FilterListItem selected={true}>
            <Link href='/'>
              <FilterListItemName>All</FilterListItemName>
            </Link>
          </FilterListItem>

          <FilterListItem>
            <Link href='/'>
              <FilterListItemName>Blazers</FilterListItemName>
            </Link>
          </FilterListItem>

          <FilterListItem>
            <Link href='/'>
              <FilterListItemName>Cashmere</FilterListItemName>
            </Link>
          </FilterListItem>

          <FilterListItem>
            <Link href='/'>
              <FilterListItemName>T-shirts</FilterListItemName>
            </Link>
          </FilterListItem>

          <FilterListItem>
            <Link href='/'>
              <FilterListItemName>Cashmere</FilterListItemName>
            </Link>
          </FilterListItem>

          <FilterListItem>
            <Link href='/'>
              <FilterListItemName>Denim</FilterListItemName>
            </Link>
          </FilterListItem>

          <FilterListItem>
            <Link href='/'>
              <FilterListItemName>Linen</FilterListItemName>
            </Link>
          </FilterListItem>

          <FilterListItem>
            <Link href='/'>
              <FilterListItemName>Suits</FilterListItemName>
            </Link>
          </FilterListItem>
        </FilterList>
      </FilterContainer>
    </FiltersContainer>
  );
};

export default Filters;
