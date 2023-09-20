'use client';
import Image from 'next/image';

import CarouselThumbnails from './carousel-thumbnails/carousel-thumbnails';
import ArrowHorizontalLeft from '@/ui/arrow-horizontal/arrow-horizontal-left';
import ArrowHorizontalRight from '@/ui/arrow-horizontal/arrow-horizontal-right';

import {
  ProductCarouselContainer,
  ProductCarouselImagesContainer,
  ProductCarouselThumbnailContainer,
} from './product-carousel.styles';

const ProductCarousel = (props: {
  productId: string;
  productName: string;
  media: string[];
}) => {
  const { productId, productName, media } = props;
  return (
    <ProductCarouselContainer>
      <ProductCarouselThumbnailContainer>
        <CarouselThumbnails
          productId={productId}
          productName={productName}
          media={media}
        />
      </ProductCarouselThumbnailContainer>
      <ProductCarouselImagesContainer>
        {media.map((md) => (
          <Image
            src={`/images/${productId}_${md}_2000.jpg`}
            alt={productName}
            width={640}
            height={853}
          />
        ))}
        <ArrowHorizontalRight />
        <ArrowHorizontalLeft />
      </ProductCarouselImagesContainer>
    </ProductCarouselContainer>
  );
};

export default ProductCarousel;
