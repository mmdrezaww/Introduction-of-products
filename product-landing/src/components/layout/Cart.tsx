// src/components/layout/Cart.tsx
'use client';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '@/Context/CartContext';

const Cart = () => {
    const { count } = useCart();

    return (
        <div className="relative cursor-pointer">
            <FiShoppingCart size={24} />
            {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs px-1.5 py-0.5 rounded-full">
          {count}
        </span>
            )}
        </div>
    );
};

export default Cart;
