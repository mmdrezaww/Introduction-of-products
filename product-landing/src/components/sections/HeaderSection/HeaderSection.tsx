'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const sliderImages = [
    { src: "/images/1.webp", alt: "اسلاید ۱" },
    { src: "/images/2.webp", alt: "اسلاید ۲" },
    { src: "/images/3.webp", alt: "اسلاید ۳" },
];

const bannerImages = [
    { src: "/images/2.webp", alt: "بنر اول" },
    { src: "/images/3.webp", alt: "بنر دوم" },
];

const HeaderSection = () => {
    return (
        <section className="w-full px-4 py-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
                {/* اسلایدر در ۲ ستون سمت راست */}
                <div className="md:col-span-2 w-full h-[250px] md:h-[500px] relative rounded-xl overflow-hidden">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        loop={true}
                        className="h-full"
                    >
                        {sliderImages.map((img, i) => (
                            <SwiperSlide key={i}>
                                <div className="relative w-full h-full">
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        sizes="100vw"
                                        className="object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* دو بنر عمودی در یک ستون */}
                <div className="flex flex-col gap-4">
                    {bannerImages.map((img, i) => (
                        <div key={i} className="relative w-full h-[120px] md:h-[240px] rounded-xl overflow-hidden">
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                sizes="(min-width: 768px) 33vw, 100vw"
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeaderSection;
