'use client';
import {createContext, useContext, useEffect, useState} from 'react';

const CartContext = createContext<any>(null);

export const CartProvider = ({children}: { children: React.ReactNode }) => {
    const [count, setCount] = useState(0);

    const refreshCart = async () => {
        try {
            const res = await fetch('/api/cart');
            const data = await res.json();
            setCount(data.count);
        } catch (err) {
            console.error('Failed to fetch cart count:', err);
        }
    };

    useEffect(() => {
        refreshCart(); // Initial load
    }, []);

    return (
        <CartContext.Provider value={{count, refreshCart}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error('useCart must be used inside CartProvider');
    return ctx;
};
