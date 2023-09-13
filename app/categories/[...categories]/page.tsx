import CategoryCarousel from '@/components/category-carousel/category-carousel';
import CategoryHeader from '@/components/category-header/category-header';
import CategoryPagination from '@/components/category-pagination/category-pagination';
import CategoryProducts from '@/components/category-products/category-products';

import { useState } from 'react';

export default async function CategoryPage({
  params,
}: {
  params: { categories: string[] };
}) {
  const categoryName = params.categories;

  return (
    <>
      <CategoryHeader />
      <CategoryCarousel />
      <CategoryProducts categoryName={categoryName} />
      <CategoryPagination />
    </>
  );
}
