import Image from 'next/image';
import {
  CategoryCarouselContainer,
  CategoryCarouselItem,
  CarouselLabel,
} from './category-carousel.styles';

const CategoryCarousel = () => {
  return (
    <CategoryCarouselContainer>
      <CategoryCarouselItem>
        <Image
          src='/images/product-001.jpg'
          alt='category image'
          width={288}
          height={360}
        />
        <CarouselLabel>Sub Category - 1</CarouselLabel>
      </CategoryCarouselItem>
      <CategoryCarouselItem>
        <Image
          src='/images/product-002.jpg'
          alt='category image'
          width={288}
          height={360}
        />
        <CarouselLabel>Sub Category - 2</CarouselLabel>
      </CategoryCarouselItem>
      <CategoryCarouselItem>
        <Image
          src='/images/product-003.jpg'
          alt='category image'
          width={288}
          height={360}
        />
        <CarouselLabel>Sub Category - 3</CarouselLabel>
      </CategoryCarouselItem>
      <CategoryCarouselItem>
        <Image
          src='/images/product-004.jpg'
          alt='category image'
          width={288}
          height={360}
        />
        <CarouselLabel>Sub Category - 4</CarouselLabel>
      </CategoryCarouselItem>
      <CategoryCarouselItem>
        <Image
          src='/images/product-005.jpg'
          alt='category image'
          width={288}
          height={360}
        />
        <CarouselLabel>Sub Category - 5</CarouselLabel>
      </CategoryCarouselItem>
    </CategoryCarouselContainer>
  );
};

export default CategoryCarousel;
