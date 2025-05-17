'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const sliderImages = [
    { src: '/images/1.webp', alt: 'طلا ۱' },
    { src: '/images/2.webp', alt: 'طلا ۲' },
    { src: '/images/3.webp', alt: 'طلا ۳' },
];

const MainSlider = () => {
    return (
        <div className="w-full h-[60vh] md:h-[70vh] relative overflow-hidden rounded-lg">
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                className="h-full"
            >
                {sliderImages.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-full relative">
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                sizes="100vw"
                                priority
                                className="object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MainSlider;
