import Link from 'next/link';
import { useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { FilterListItemName } from './filter-item.styles';

const FilterItem = (props: {
  mainCat: string;
  catType: 'main' | 'sub' | 'designer' | 'color' | 'size';
  catName: string;
  catKey: string;
}) => {
  const searchParams = useSearchParams()!;
  const pathname = usePathname();

  const { mainCat, catType, catName, catKey } = props;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      const tempParams = new URLSearchParams();

      let paramsFound = false;
      params.forEach((val, ky) => {
        if (ky !== name || val !== value) {
          tempParams.append(ky, val);
        } else {
          paramsFound = true;
        }
      });

      if (!paramsFound) {
        tempParams.append(name, value);
      }

      return tempParams.toString();
    },
    [searchParams]
  );

  let queryParam = '';

  if (catType === 'main') {
    return (
      <Link href={`/${mainCat}/${catName}`}>
        <FilterListItemName>{catName}</FilterListItemName>
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
  }
  return (
    <Link href={pathname + '?' + createQueryString(queryParam, catKey)}>
      <FilterListItemName>{catName}</FilterListItemName>
    </Link>
  );
};

export default FilterItem;
