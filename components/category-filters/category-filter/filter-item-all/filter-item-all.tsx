'use client';
import { useCallback } from 'react';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import { FilterListItemName } from './filter-item-all.styles';

const FilterItemAll = (props: {
  mainCat: string;
  catType: 'main' | 'sub' | 'designer' | 'color' | 'size';
}) => {
  const { mainCat, catType } = props;
  const searchParams = useSearchParams()!;
  const pathname = usePathname();

  const createAllFilterString = useCallback(
    (name: string) => {
      const params = new URLSearchParams(searchParams);
      params.delete(name);
      return params.toString();
    },
    [searchParams]
  );

  let queryParam = '';

  if (catType === 'main') {
    return (
      <Link href={`/categories/${mainCat}`}>
        <FilterListItemName>All</FilterListItemName>
      </Link>
    );
  } else {
    switch (catType) {
      case 'sub':
        queryParam = 'sc';
        break;
      case 'designer':
        queryParam = 'designer';
        break;
      case 'color':
        queryParam = 'color';
        break;
      case 'size':
        queryParam = 'size';
        break;
      default:
        break;
    }

    return (
      <Link
        href={
          pathname + catType === 'sub'
            ? ''
            : '?' + createAllFilterString(queryParam)
        }
      >
        <FilterListItemName>All</FilterListItemName>
      </Link>
    );
  }
};

export default FilterItemAll;
