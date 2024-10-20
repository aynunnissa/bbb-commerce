import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// Import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';

interface IProps {
  images: string[];
}

const ProductGallery = ({ images }: IProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (images.length > 0) {
      const img = new window.Image();
      img.src = images[0];
      img.onload = () => {
        setLoading(false);
      };
    }
  }, [images]);

  return (
    <>
      {loading ? (
        <div>
          <div className="animate-pulse w-full h-[400px] bg-gray-200 rounded-xl dark:bg-gray-700"></div>
          <div className="flex mt-8 w-full -mx-2">
            <div className='w-1/4 h-[50px] px-2'>
              <div className="animate-pulse w-full h-full bg-gray-200 rounded-xl dark:bg-gray-700"></div>
            </div>
            <div className='w-1/4 h-[50px] px-2'>
              <div className="animate-pulse w-full h-full bg-gray-200 rounded-xl dark:bg-gray-700"></div>
            </div>
            <div className='w-1/4 h-[50px] px-2'>
              <div className="animate-pulse w-full h-full bg-gray-200 rounded-xl dark:bg-gray-700"></div>
            </div>
            <div className='w-1/4 h-[50px] px-2'>
              <div className="animate-pulse w-full h-full bg-gray-200 rounded-xl dark:bg-gray-700"></div>
            </div>
          </div>
        </div>
      ) : 
        <>
          <Swiper
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {/* Main Swiper slides */}
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className='w-full h-full relative aspect-square'>
                  <Image
                    src={image}
                    alt={`Image ${index + 1}`}
                    fill
                    loading={`${index === 0 ? 'eager' : 'lazy'}`}
                    priority={index === 0}
                    className='object-contain'
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {/* Thumbnail Swiper slides */}
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className='w-full h-full relative aspect-square'>
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className='object-cover'
                    loading='lazy'
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      }
    </>
  );
};

export default ProductGallery;
