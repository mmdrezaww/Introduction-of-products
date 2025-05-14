'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { products } from '@/data/products';

const FeaturedProducts = () => {
    return (
        <section className="py-12 px-4 md:px-12">
            <h2 className="text-center text-xl font-bold mb-6">محصولات پر فروش</h2>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation
                className="!pb-12"
                breakpoints={{
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="group relative bg-white shadow-md rounded-lg overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105">
                            <div className="w-40 h-40 mx-auto overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                                />
                            </div>
                            <div className="p-3 text-center flex flex-col gap-1">
                                <h3 className="font-medium text-sm">{product.title}</h3>
                                <p className="text-xs text-gray-500">{product.price}</p>
                                <button
                                    className="mt-1 px-3 py-1 bg-yellow-500 text-white font-medium rounded-md shadow-sm hover:bg-yellow-400 hover:shadow-md transition duration-300">
                                    مشاهده محصول
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx global>{`
                .swiper-pagination-bullets {
                    bottom: 0px !important;
                }
                .swiper-pagination-bullet {
                    margin: 0 4px !important;
                }
            `}</style>
        </section>
    );
};

export default FeaturedProducts;
