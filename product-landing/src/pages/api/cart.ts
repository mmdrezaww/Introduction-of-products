// src/pages/api/cart.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // Mock cart data
    res.status(200).json({ count: 2 });
}
