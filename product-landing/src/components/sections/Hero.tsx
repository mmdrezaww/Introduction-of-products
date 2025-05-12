import React from 'react';

const Hero = () => {
    return (
        <section className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
                    به وبسایت گالری طلا خوش آمدید
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    اینجا می‌تونی توضیحی جذاب درباره محصول یا خدماتت بنویسی که مخاطب رو جذب کنه.
                </p>
                <div className="flex justify-center gap-4">
                    <button
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-100 transition">
                        اطلاعات بیشتر
                    </button>
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                        شروع کنید
                    </button>

                </div>
            </div>
        </section>
    );
};

export default Hero;
