import Image from 'next/image';
import { Thumbnail, ThumbnailImage } from './carousel-thumbnails.styles';

const CarouselThumbnails = () => {
  return (
    <>
      <Thumbnail>
        <Image
          src='/images/203822084_in_2000.jpg'
          alt=''
          width={80}
          height={106}
        />
      </Thumbnail>
      <Thumbnail>
        <Image
          src='/images/203822084_ou_2000.jpg'
          alt=''
          width={80}
          height={106}
        />
      </Thumbnail>
      <Thumbnail>
        <Image
          src='/images/203822084_e1_2000.jpg'
          alt=''
          width={80}
          height={106}
        />
      </Thumbnail>
      <Thumbnail>
        <Image
          src='/images/203822084_bk_2000.jpg'
          alt=''
          width={80}
          height={106}
        />
      </Thumbnail>
    </>
  );
};

export default CarouselThumbnails;
