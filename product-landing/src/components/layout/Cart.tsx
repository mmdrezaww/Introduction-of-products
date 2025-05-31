// src/components/layout/Cart.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';

const Cart = () => {
    const [cartCount, setCartCount] = useState(0);
    const [open, setOpen] = useState(false);
    const cartRef = useRef(null);

    useEffect(() => {
        const fetchCart = async () => {
            const res = await fetch('/api/cart');
            const data = await res.json();
            setCartCount(data.count);
        };
        fetchCart();
    }, []);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (cartRef.current && !(cartRef.current as any).contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={cartRef}>
            <div
                className="relative flex items-center cursor-pointer hover:text-yellow-500"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
            >
                <FiShoppingCart size={20} />
                {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs rounded-full px-1.5 py-0.5">
            {cartCount}
          </span>
                )}
            </div>
            {open && (
                <div className="absolute right-0 top-8 bg-white border border-gray-100 shadow-md rounded-md z-50">
                    <Link
                        href="/cart"
                    >
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Cart;
