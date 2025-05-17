import React from "react";

const banners = [
    {
        id: 1,
        image: "/images/3.webp",
        alt: "Banner 1",
        title: "محصول جدید",
        link: "/products/new",
    },
    {
        id: 2,
        image: "/images/4.webp",
        alt: "Banner 2",
        title: "تخفیف‌های ویژه",
        link: "/discounts",
    },
];

const SideBanners = () => {
    return (
        <>
            {banners.map(({ id, image, alt, title, link }) => (
                <a
                    key={id}
                    href={link}
                    className="block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition mb-4"
                >
                    <img
                        src={image}
                        alt={alt}
                        className="w-full h-36 object-cover"
                        loading="lazy"
                    />
                    <div className="p-2 text-center font-semibold bg-white">{title}</div>
                </a>
            ))}
        </>
    );
};

export default SideBanners;
