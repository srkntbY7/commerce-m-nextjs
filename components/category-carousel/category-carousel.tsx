import Image from 'next/image';
import {
  CategoryCarouselContainer,
  CategoryCarouselItem,
  CarouselLabel,
} from './category-carousel.styles';
import Link from 'next/link';

interface CategoryCarouselProps {
  link: string;
  caption: string;
  image: string;
}

const CategoryCarousel = (props: { catMedia: CategoryCarouselProps[] }) => {
  const { catMedia } = props;

  return (
    <CategoryCarouselContainer>
      {Array.isArray(catMedia) &&
        catMedia.length > 0 &&
        catMedia.map((md) => (
          <CategoryCarouselItem>
            <Link href={md.link}>
              <Image
                src={`/images/${md.image}`}
                alt={md.caption}
                width={288}
                height={360}
              />
              <CarouselLabel>{md.caption}</CarouselLabel>
            </Link>
          </CategoryCarouselItem>
        ))}
    </CategoryCarouselContainer>
  );
};

export default CategoryCarousel;
