// src/pages/api/cart.ts
import type { NextApiRequest, NextApiResponse } from 'next';

type CartItem = {
    id: string;
    title: string;
    price: string;
    quantity: number;
    image: string;
};

let cart: CartItem[] = []; // In-memory cart (reset on server restart)

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        return res.status(200).json({ items: cart, count: totalCount });
    }

    if (req.method === 'POST') {
        const { id, title, price, image } = req.body;

        if (!id || !title || !price || !image) {
            return res.status(400).json({ error: 'Missing product data' });
        }

        const existingItem = cart.find((item) => item.id === id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ id, title, price, image, quantity: 1 });
        }

        const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        return res.status(200).json({ message: 'Item added', count: totalCount });
    }

    return res.status(405).json({ error: 'Method not allowed' });
}
