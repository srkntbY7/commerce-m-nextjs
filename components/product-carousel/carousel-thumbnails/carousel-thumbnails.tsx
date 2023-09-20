import Image from 'next/image';
import { Thumbnail, ThumbnailImage } from './carousel-thumbnails.styles';

const CarouselThumbnails = (props: {
  productId: string;
  productName: string;
  media: string[];
}) => {
  const { productId, productName, media } = props;
  return (
    <>
      {media.map((md) => (
        <Thumbnail>
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
