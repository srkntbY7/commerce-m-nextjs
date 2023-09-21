'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const sliderRef = useRef<Slider | null>(null);
  const slickSettingsMain = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: <ArrowHorizontalRight />,
    prevArrow: <ArrowHorizontalLeft />,
    initialSlide: activeSlide,
    afterChange: (index: number) => {
      setActiveSlide(index);
    },
  };

  const slickSettingsThumbs = {
    speed: 500,
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(activeSlide);
    }
  }, [activeSlide]);

  const onThumbnailClicked = (ind: number) => {
    setActiveSlide(ind);
  };

  return (
    <ProductCarouselContainer>
      <ProductCarouselThumbnailContainer>
        <CarouselThumbnails
          productId={productId}
          productName={productName}
          media={media}
          onThumbnailClicked={onThumbnailClicked}
          currentSlide={activeSlide}
        />
      </ProductCarouselThumbnailContainer>
      <ProductCarouselImagesContainer>
        <Slider
          {...slickSettingsMain}
          ref={(slider) => (sliderRef.current = slider)}
        >
          {media.map((md) => (
            <div key={md}>
              <Image
                src={`/images/${productId}_${md}_2000.jpg`}
                alt={productName}
                width={640}
                height={853}
              />
            </div>
          ))}
        </Slider>
      </ProductCarouselImagesContainer>
    </ProductCarouselContainer>
  );
};

export default ProductCarousel;
