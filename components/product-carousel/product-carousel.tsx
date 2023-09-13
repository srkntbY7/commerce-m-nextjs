import Image from 'next/image';
import CarouselThumbnails from './carousel-thumbnails/carousel-thumbnails';
import {
  ProductCarouselContainer,
  ProductCarouselImagesContainer,
  ProductCarouselThumbnailContainer,
} from './product-carousel.styles';
import ArrowHorizontalLeft from '@/ui/arrow-horizontal/arrow-horizontal-left';
import ArrowHorizontalRight from '@/ui/arrow-horizontal/arrow-horizontal-right';

const ProductCarousel = (props: { media: string[] }) => {
  return (
    <ProductCarouselContainer>
      <ProductCarouselThumbnailContainer>
        <CarouselThumbnails />
      </ProductCarouselThumbnailContainer>
      <ProductCarouselImagesContainer>
        <Image
          src='/images/203822084_in_2000.jpg'
          alt=''
          width={640}
          height={853}
        />
        <Image
          src='/images/203822084_ou_2000.jpg'
          alt=''
          width={640}
          height={853}
        />
        <ArrowHorizontalRight />
        <ArrowHorizontalLeft />
      </ProductCarouselImagesContainer>
    </ProductCarouselContainer>
  );
};

export default ProductCarousel;
