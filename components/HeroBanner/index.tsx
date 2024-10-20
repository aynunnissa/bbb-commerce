import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';

import Image from 'next/image';

export default function HeroBannerCarousel() {
  return (
    <div className="hero__carousel">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        navigation
        modules={[ Navigation, Autoplay ]}
      >
        <SwiperSlide>
          <div className="w-full">
            <div className='relative w-full'>
              <Image
                src="https://raw.githubusercontent.com/aynunnissa/tokobiru-data/main/images/banners/banner1.webp"
                alt='Best Deals on SmartWatch'
                className="w-full h-full object-cover"
                width={700}
                height={400}
                layout='responsive'
                loading='eager'
                priority
              />
            </div> 
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <div className='relative w-full'>
              <Image
                src="https://raw.githubusercontent.com/aynunnissa/tokobiru-data/main/images/banners/banner2.webp"
                alt='Best Deals on Redmi Note'
                width={700}
                height={400}
                layout='responsive'
                className="object-cover"
              />
            </div> 
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
