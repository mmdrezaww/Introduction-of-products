// src/Context/CartContext.tsx
'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

type CartContextType = {
    count: number;
    refreshCart: () => void;
};

const CartContext = createContext<CartContextType>({
    count: 0,
    refreshCart: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [count, setCount] = useState(0);

    const refreshCart = async () => {
        const res = await fetch('/api/cart');
        const data = await res.json();
        setCount(data.count);
    };

    useEffect(() => {
        refreshCart(); // load on first mount
    }, []);

    return (
        <CartContext.Provider value={{ count, refreshCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
