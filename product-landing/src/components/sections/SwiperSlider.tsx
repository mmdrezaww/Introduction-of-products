import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const images: string[] = [
    "/images/1.webp",
    "/images/2.webp",
    "/images/3.webp",
    "/images/4.webp",
];

const SwiperSlider = () => {
    return (
        <div className="max-w-4xl mx-auto mb-8">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                navigation
                pagination={{ clickable: true }}
                className="rounded-lg overflow-hidden shadow-lg"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img src={src} alt={`تصویر ${index + 1}`} className="w-full h-120 object-cover rounded-lg" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SwiperSlider;
