'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/Context/AuthContext';
import { FiUser, FiLogIn, FiUserPlus, FiSearch, FiX, FiLock, FiMail } from 'react-icons/fi';
import Cart from './Cart';

const TopNavbar = () => {
    const { user, logout, login, register } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [mode, setMode] = useState<'login' | 'register'>('login');
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState('');

    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!emailOrPhone || !password || (mode === 'register' && (!name || !confirm))) {
            setError('لطفاً همه فیلدها را پر کنید');
            return;
        }

        if (mode === 'register' && password !== confirm) {
            setError('رمز عبور و تکرار آن یکسان نیستند');
            return;
        }

        if (mode === 'login') {
            login({ email: emailOrPhone, name: 'کاربر' }); // فرضی
        } else {
            register({ email: emailOrPhone, name });
        }

        setShowModal(false);
    };

    return (
        <div className="w-full border-b border-gray-100 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                <Link href="/">
                    <Image src="/images/logo.webp" alt="Logo" width={85} height={80} />
                </Link>

                <div className="relative w-1/2 max-w-md">
                    <input
                        type="text"
                        placeholder="جستجو..."
                        className="w-full rounded-full bg-gray-100 py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    <FiSearch className="absolute left-3 top-2.5 text-gray-500" size={18} />
                </div>

                <div className="flex items-center gap-6 right-1/2 text-gray-800 text-sm font-medium">
                    <button className="rounded-full px-5 py-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow hover:shadow-md transition text-xs md:text-sm">
                        Gold Trends
                    </button>

                    <div className="relative group cursor-pointer left-2" ref={menuRef}>
                        <FiUser
                            size={25}
                            className="hover:text-yellow-500"
                            onClick={() => setMenuOpen(!menuOpen)}
                        />

                        {menuOpen && (
                            <div className="absolute left-0 top-full mt-2 bg-white border rounded-xl shadow-xl w-44 z-50 animate-fade-in">
                                {!user ? (
                                    <>
                                        <button
                                            onClick={() => {
                                                setMode('login');
                                                setShowModal(true);
                                                setMenuOpen(false);
                                            }}
                                            className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 w-full"
                                        >
                                            <FiLogIn className="text-yellow-500" />
                                            ورود
                                        </button>
                                        <div className="border-t border-gray-100"></div>
                                        <button
                                            onClick={() => {
                                                setMode('register');
                                                setShowModal(true);
                                                setMenuOpen(false);
                                            }}
                                            className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 w-full"
                                        >
                                            <FiUserPlus className="text-yellow-500" />
                                            عضویت
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <p className="px-4 py-2 text-sm font-medium text-gray-800">{user.name}</p>
                                        <button
                                            onClick={logout}
                                            className="w-full text-left flex items-center gap-2 px-4 py-2 hover:bg-gray-50"
                                        >
                                            <FiLogIn /> خروج
                                        </button>
                                    </>
                                )}
                            </div>
                        )}
                    </div>

                    <Cart />
                </div>
            </div>

            {/* مودال فرم ورود/عضویت */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-50 flex items-center justify-center animate-fade-in">
                    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative animate-slide-up">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
                        >
                            <FiX size={20} />
                        </button>

                        <h2 className="text-xl font-bold text-center text-gray-700 mb-4">
                            {mode === 'login' ? 'ورود به حساب' : 'عضویت'}
                        </h2>

                        {error && <p className="text-red-500 text-sm text-center mb-3">{error}</p>}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {mode === 'register' && (
                                <div className="relative">
                                    <FiUser className="absolute top-3 left-3 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="نام کامل"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-400"
                                    />
                                </div>
                            )}

                            <div className="relative">
                                <FiMail className="absolute top-3 left-3 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="ایمیل یا شماره موبایل"
                                    value={emailOrPhone}
                                    onChange={(e) => setEmailOrPhone(e.target.value)}
                                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-400"
                                />
                            </div>

                            <div className="relative">
                                <FiLock className="absolute top-3 left-3 text-gray-400" />
                                <input
                                    type="password"
                                    placeholder="رمز عبور"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-400"
                                />
                            </div>

                            {mode === 'register' && (
                                <div className="relative">
                                    <FiLock className="absolute top-3 left-3 text-gray-400" />
                                    <input
                                        type="password"
                                        placeholder="تکرار رمز عبور"
                                        value={confirm}
                                        onChange={(e) => setConfirm(e.target.value)}
                                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-400"
                                    />
                                </div>
                            )}

                            <button
                                type="submit"
                                className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition duration-300"
                            >
                                {mode === 'login' ? 'ورود' : 'ثبت‌نام'}
                            </button>

                            <p
                                className="text-sm text-center text-gray-600 cursor-pointer hover:underline"
                                onClick={() => {
                                    setMode(mode === 'login' ? 'register' : 'login');
                                    setError('');
                                }}
                            >
                                {mode === 'login' ? 'حساب ندارید؟ ثبت‌نام کنید' : 'حساب دارید؟ وارد شوید'}
                            </p>
                        </form>
                    </div>
                </div>
            )}

            {/* انیمیشن‌ها */}
            <style jsx>{`
        .animate-fade-in {
          animation: fade-in 0.25s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.35s ease-out;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
        </div>
    );
};

export default TopNavbar;
