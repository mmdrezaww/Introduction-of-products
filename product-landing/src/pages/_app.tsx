// src/pages/_app.tsx
import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {AuthProvider} from "@/Context/AuthContext";
import {CartProvider} from "@/Context/CartContext";

export default function App({Component, pageProps}: AppProps) {
    return (
        <AuthProvider>
            <CartProvider>
                <div className="font-sans">
                    <Component {...pageProps} />
                </div>
            </CartProvider>
        </AuthProvider>
    );
}
