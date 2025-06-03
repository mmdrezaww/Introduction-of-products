import "@/styles/globals.css";
import type {AppProps} from "next/app";
import { AuthProvider } from "@/Context/AuthContext";

export default function App({Component, pageProps}: AppProps) {
    return (
        <AuthProvider>
            <div className="font-sans">
                <Component {...pageProps} />
            </div>

        </AuthProvider>
    );
}
