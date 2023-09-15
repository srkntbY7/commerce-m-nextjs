'use client';
import { FiltersContainer } from './category-filters.styles';

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

import { useSearchParams } from 'next/navigation';

const Filters = (props: {
  mainCategoryName: string;
  subCategoryName: string | null;
  mainCatFilters: ICategoryFilters[]; //clothing, accessories etc.
  subCatFilters: ICategoryFilters[] | null; //t-shirts, jeans etc.
  designerFilters: IDesignerFilters[];
  colorFilters: IColorFilters[];
  sizeFilters: ISizeFilters[];
}) => {
  const {
    mainCategoryName,
    subCategoryName,
    mainCatFilters,
    subCatFilters,
    designerFilters,
    colorFilters,
    sizeFilters,
  } = props;

  console.log('sizeFilters', sizeFilters);

  const searchParams = useSearchParams();

  const searchParamSubCategory = searchParams.getAll('sc');
  const searchParamsDesigner = searchParams.getAll('designer');
  const searchParamsColor = searchParams.getAll('color');
  const searchParamsSizes = searchParams.getAll('size');

  let seledtedPrimaryCatId = null;
  if (Array.isArray(subCatFilters)) {
    const seledtedPrimaryCat = mainCatFilters.filter(
      (subCat) => subCat.catName === subCategoryName
    );
    if (seledtedPrimaryCat) {
      seledtedPrimaryCatId = seledtedPrimaryCat[0].catId;
    }
  }

  //console.log('current', current);
  return (
    <FiltersContainer>
      <CategoryFilter
        filters={mainCatFilters}
        catTitle='Category'
        catKey='catId'
        catName='catName'
        mainCat={mainCategoryName}
        subCat={subCategoryName}
        catType='main'
        selectedCat={
          typeof seledtedPrimaryCatId === 'string'
            ? [seledtedPrimaryCatId]
            : null
        }
      />
      {subCatFilters && typeof subCategoryName === 'string' && (
        <CategoryFilter
          filters={subCatFilters}
          catTitle={subCategoryName}
          catKey='catId'
          catName='catName'
          mainCat={mainCategoryName}
          subCat={subCategoryName}
          catType='sub'
          selectedCat={searchParamSubCategory}
        />
      )}

      <CategoryFilter
        filters={designerFilters}
        catTitle='Designer'
        catKey='designerId'
        catName='designerName'
        mainCat={mainCategoryName}
        subCat={subCategoryName}
        catType='designer'
        selectedCat={searchParamsDesigner}
      />

      <CategoryFilter
        filters={colorFilters}
        catTitle='Color'
        catKey='colorName'
        catName='colorName'
        mainCat={mainCategoryName}
        subCat={subCategoryName}
        catType='color'
        selectedCat={searchParamsColor}
      />

      {sizeFilters.map((sizeFilter) => (
        <CategoryFilter
          key={sizeFilter.sizeGroup}
          filters={sizeFilter.sizes[0]}
          catTitle={`${sizeFilter.sizeGroup} Size`}
          catKey='size'
          catName='size'
          mainCat={mainCategoryName}
          subCat={subCategoryName}
          catType='size'
          selectedCat={searchParamsSizes}
        />
      ))}
    </FiltersContainer>
  );
};

export default Filters;
