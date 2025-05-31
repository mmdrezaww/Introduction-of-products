import Image from "next/image";

const DiscountBanner = () => {
    return (
        <section className="w-full px-4 py-8 bg-yellow-100">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                {/* Banner Image */}
                <div className="w-full h-64 relative">
                    <Image
                        src="/images/1.webp"
                        alt="تخفیف ویژه"
                        fill
                        className="object-cover rounded-xl"
                    />
                </div>

                {/* Text Content */}
                <div className="text-center md:text-right">
                    <h2 className="text-3xl font-bold text-yellow-800 mb-2">تخفیف ویژه</h2>
                    <p className="text-gray-700 mb-4">
                        تا ۳۰٪ تخفیف روی منتخب‌ترین محصولات طلا و جواهرات، فقط برای مدت محدود!
                    </p>
                    <button className="px-6 py-2 bg-yellow-700 text-white rounded-lg hover:bg-yellow-800 transition-all">
                        مشاهده محصولات
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DiscountBanner;
