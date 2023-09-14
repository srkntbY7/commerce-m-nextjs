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
  sizes: ISizes[];
}
interface ISizes {
  size: string;
  order: number;
}

const Filters = (props: {
  mainCatFilters: ICategoryFilters[];
  subCatFilters: ICategoryFilters[] | null;
  designerFilters: IDesignerFilters[];
  colorFilters: IColorFilters[];
  sizeFilters: ISizeFilters[];
}) => {
  const {
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
      <FilterContainer>
        <FilterHeading onClick={toggleOpen}>
          <FilterTitle>Category</FilterTitle>
          <SelectedFilter>All</SelectedFilter>
          <ArrowVertical type='right' open={open} />
        </FilterHeading>
        <FilterList open={open}>
          <FilterListItem selected={true}>
            <Link href='/'>
              <FilterListItemName>All</FilterListItemName>
            </Link>
          </FilterListItem>
          {mainCatFilters.map((catFilter) => (
            <FilterListItem key={catFilter.catId}>
              <Link href='/'>
                <FilterListItemName>{catFilter.catName}</FilterListItemName>
              </Link>
            </FilterListItem>
          ))}
        </FilterList>
      </FilterContainer>

      {subCatFilters && (
        <FilterContainer>
          <FilterHeading onClick={toggleOpen}>
            <FilterTitle>Category</FilterTitle>
            <SelectedFilter>All</SelectedFilter>
            <ArrowVertical type='right' open={open} />
          </FilterHeading>
          <FilterList open={open}>
            <FilterListItem selected={true}>
              <Link href='/'>
                <FilterListItemName>All</FilterListItemName>
              </Link>
            </FilterListItem>
            {subCatFilters.map((catFilter) => (
              <FilterListItem key={catFilter.catId}>
                <Link href='/'>
                  <FilterListItemName>{catFilter.catName}</FilterListItemName>
                </Link>
              </FilterListItem>
            ))}
          </FilterList>
        </FilterContainer>
      )}

      <FilterContainer>
        <FilterHeading onClick={toggleOpen}>
          <FilterTitle>Designer</FilterTitle>
          <SelectedFilter>All</SelectedFilter>
          <ArrowVertical type='right' open={open} />
        </FilterHeading>
        <FilterList open={open}>
          <FilterListItem selected={true}>
            <Link href='/'>
              <FilterListItemName>All</FilterListItemName>
            </Link>
          </FilterListItem>
          {designerFilters.map((desFilter) => (
            <FilterListItem key={desFilter.designerId}>
              <Link href='/'>
                <FilterListItemName>
                  {desFilter.designerName}
                </FilterListItemName>
              </Link>
            </FilterListItem>
          ))}
        </FilterList>
      </FilterContainer>

      <FilterContainer>
        <FilterHeading onClick={toggleOpen}>
          <FilterTitle>Color</FilterTitle>
          <SelectedFilter>All</SelectedFilter>
          <ArrowVertical type='right' open={open} />
        </FilterHeading>
        <FilterList open={open}>
          <FilterListItem selected={true}>
            <Link href='/'>
              <FilterListItemName>All</FilterListItemName>
            </Link>
          </FilterListItem>
          {colorFilters.map((colorFilter) => (
            <FilterListItem key={colorFilter.colorName}>
              <Link href='/'>
                <FilterListItemName>{colorFilter.colorName}</FilterListItemName>
              </Link>
            </FilterListItem>
          ))}
        </FilterList>
      </FilterContainer>

      {sizeFilters.map((sizeFilter) => (
        <FilterContainer key={sizeFilter.sizeGroup}>
          <FilterHeading onClick={toggleOpen}>
            <FilterTitle>{sizeFilter.sizeGroup} Size</FilterTitle>
            <SelectedFilter>All</SelectedFilter>
            <ArrowVertical type='right' open={open} />
          </FilterHeading>
          <FilterList open={open}>
            <FilterListItem selected={true}>
              <Link href='/'>
                <FilterListItemName>All</FilterListItemName>
              </Link>
            </FilterListItem>
            {sizeFilter.sizes.map((size) => (
              <FilterListItem key={size.order}>
                <Link href='/'>
                  <FilterListItemName>{size.size}</FilterListItemName>
                </Link>
              </FilterListItem>
            ))}
          </FilterList>
        </FilterContainer>
      ))}

      {/*
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
      */}
    </FiltersContainer>
  );
};

export default Filters;
