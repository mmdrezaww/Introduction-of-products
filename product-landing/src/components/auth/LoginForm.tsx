'use client';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/Context/AuthContext';
import { FiUser, FiMail } from 'react-icons/fi';

const LoginForm = () => {
    const { login } = useAuth();
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !name) {
            setError('لطفاً همه فیلدها را پر کنید');
            return;
        }

        login({ email, name });
        router.push('/');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <form
                onSubmit={handleLogin}
                className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm space-y-4"
            >
                <h2 className="text-xl font-bold text-center">ورود</h2>

                {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                <div className="relative">
                    <FiUser className="absolute top-3 left-3 text-gray-400" />
                    <input
                        type="text"
                        placeholder="نام"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-400"
                    />
                </div>

                <div className="relative">
                    <FiMail className="absolute top-3 left-3 text-gray-400" />
                    <input
                        type="email"
                        placeholder="ایمیل"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-400"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
                >
                    ورود
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
