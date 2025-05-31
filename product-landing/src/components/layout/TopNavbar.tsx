// src/components/layout/TopNavbar.tsx
import Link from 'next/link'
import Image from 'next/image'
import {FiSearch, FiShoppingCart, FiUser, FiLogIn, FiUserPlus} from 'react-icons/fi'
import Cart from './Cart'

const TopNavbar = () => {
    return (
        <div className="w-full border-b border-gray-100 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                {/* Logo */}
                <Link href="/">
                    <Image src="/images/logo.webp" alt="Logo" width={85} height={80}/>
                </Link>

                {/* Search */}
                <div className="relative w-1/2 max-w-md">
                    <input
                        type="text"
                        placeholder="جستجو..."
                        className="w-full rounded-full bg-gray-100 py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    <FiSearch className="absolute left-3 top-2.5 text-gray-500" size={18}/>
                </div>

                {/* Icons: User & Cart */}
                <div className="flex items-center gap-6 right-1/2 text-gray-800 text-sm font-medium">
                    <button
                        className="rounded-full px-5 py-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow hover:shadow-md transition text-xs md:text-sm">
                        Gold Trends
                    </button>

                    {/* User Icon with hover menu */}
                    <div className="relative group cursor-pointer left-2">
                        <FiUser size={25} className="hover:text-yellow-500"/>
                        <div
                            className="absolute left-0 top-full mt-2 bg-white border border-gray-100 rounded shadow-md w-36 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                            <Link href="/register" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50">
                                <FiUserPlus/> Sign Up
                            </Link>
                            <Link href="/login" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50">
                                <FiLogIn/> Login
                            </Link>
                        </div>
                    </div>

                    {/* Cart Component */}
                    <Cart/>
                </div>

            </div>
        </div>
    )
}

export default TopNavbar
