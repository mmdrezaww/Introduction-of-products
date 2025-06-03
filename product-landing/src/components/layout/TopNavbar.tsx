import Link from 'next/link';
import Image from 'next/image';
import {useAuth} from '@/Context/AuthContext';
import {FiUser, FiLogIn, FiUserPlus, FiSearch} from 'react-icons/fi';
import Cart from './Cart';

const TopNavbar = () => {
    const {user, logout} = useAuth();

    return (
        <div className="w-full border-b border-gray-100 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                <Link href="/">
                    <Image src="/images/logo.webp" alt="Logo" width={85} height={80}/>
                </Link>

                <div className="relative w-1/2 max-w-md">
                    <input
                        type="text"
                        placeholder="جستجو..."
                        className="w-full rounded-full bg-gray-100 py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    <FiSearch className="absolute left-3 top-2.5 text-gray-500" size={18}/>
                </div>

                <div className="flex items-center gap-6 right-1/2 text-gray-800 text-sm font-medium">
                    <button
                        className="rounded-full px-5 py-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow hover:shadow-md transition text-xs md:text-sm">
                        Gold Trends
                    </button>

                    <div className="relative group cursor-pointer left-2">
                        <FiUser size={25} className="hover:text-yellow-500"/>

                        <div
                            className="absolute left-0 top-full mt-2 bg-white border rounded shadow-md w-36 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                            {!user ? (
                                <>
                                    <Link href="/register"
                                          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50">
                                        <FiUserPlus/> عضویت
                                    </Link>
                                    <Link href="/login" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50">
                                        <FiLogIn/> ورود
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <p className="px-4 py-2 text-sm font-medium text-gray-800">{user.name}</p>
                                    <button
                                        onClick={logout}
                                        className="w-full text-left flex items-center gap-2 px-4 py-2 hover:bg-gray-50"
                                    >
                                        <FiLogIn/> خروج
                                    </button>
                                </>
                            )}
                        </div>
                    </div>

                    <Cart/>
                </div>
            </div>
        </div>
    );
};

export default TopNavbar;
