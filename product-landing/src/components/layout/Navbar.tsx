import React from 'react';

const Navbar = () => {
    return (
        <header className="bg-white shadow-sm fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

                {/* Logo */}
                <div className="text-xl font-bold text-blue-600">
                    <a href="#">محصول من</a>
                </div>

                {/* Links */}
                <nav className="hidden md:flex gap-6 text-gray-700 text-sm">
                    <a href="#" className="hover:text-blue-600 transition">تماس با ما</a>
                    <a href="#" className="hover:text-blue-600 transition">قیمت‌ها</a>
                    <a href="#" className="hover:text-blue-600 transition">ویژگی‌ها</a>
                    <a href="#" className="hover:text-blue-600 transition">خانه</a>
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <a
                        href="#"
                        className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition text-sm"
                    >
                        شروع کنید
                    </a>
                </div>

                {/* Mobile menu placeholder (برای آینده) */}
                <div className="md:hidden">
                    <button>
                        <span className="sr-only">باز کردن منو</span>
                        <svg
                            className="w-6 h-6 text-gray-700"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

            </div>
        </header>
    );
};

export default Navbar;
