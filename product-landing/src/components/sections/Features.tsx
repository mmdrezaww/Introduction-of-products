'use client';

import { FaLock, FaShippingFast, FaGem, FaPhoneAlt } from 'react-icons/fa';

const features = [
    {
        icon: <FaGem className="text-yellow-500 text-3xl" />,
        title: 'طلای ۱۸ عیار اصل',
        description: 'تمامی محصولات با فاکتور رسمی و تضمین اصالت ارائه می‌شوند.',
    },
    {
        icon: <FaLock className="text-yellow-500 text-3xl" />,
        title: 'خرید امن',
        description: 'با درگاه‌های بانکی معتبر و رمزگذاری‌شده خیال‌تان راحت است.',
    },
    {
        icon: <FaShippingFast className="text-yellow-500 text-3xl" />,
        title: 'ارسال سریع و بیمه‌شده',
        description: 'ارسال فوری با بسته‌بندی ایمن و بیمه‌ی کامل طلا.',
    },
    {
        icon: <FaPhoneAlt className="text-yellow-500 text-3xl" />,
        title: 'مشاوره رایگان',
        description: 'پیش از خرید، با کارشناسان ما مشورت کنید و بهترین انتخاب را داشته باشید.',
    },
];

const Features = () => {
    return (
        <section className="py-16 bg-white text-gray-900">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-6">چرا خرید از ما؟</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 border rounded-xl shadow hover:shadow-lg transition">
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
