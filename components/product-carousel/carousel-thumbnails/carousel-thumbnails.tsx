import Image from 'next/image';
import { Thumbnail, ThumbnailImage } from './carousel-thumbnails.styles';
import { useCallback } from 'react';

const CarouselThumbnails = (props: {
  productId: string;
  productName: string;
  media: string[];
  onThumbnailClicked: (ind: number) => void;
  currentSlide: number;
}) => {
  const { productId, productName, media, onThumbnailClicked, currentSlide } =
    props;
  const ThumbnailClicked = (ind: number) =>
    useCallback(() => {
      console.log('thumbind', ind);
      onThumbnailClicked(ind);
    }, []);
  return (
    <>
      {media.map((md, ind) => (
        <Thumbnail
          key={md}
          onClick={ThumbnailClicked(ind)}
          selected={currentSlide === ind}
        >
          <Image
            src={`/images/${productId}_${md}_2000.jpg`}
            alt={productName}
            width={80}
            height={106}
          />
        </Thumbnail>
      ))}
    </>
  );
};

export default CarouselThumbnails;
