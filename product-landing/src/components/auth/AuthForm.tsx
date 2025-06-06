// src/components/auth/AuthForm.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/Context/AuthContext';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';

const AuthForm = () => {
    const { login, register } = useAuth();
    const router = useRouter();
    const [mode, setMode] = useState<'login' | 'register'>('login');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || (mode === 'register' && (!name || !password || !confirm))) {
            setError('لطفاً همه فیلدها را پر کنید');
            return;
        }

        if (mode === 'register' && password !== confirm) {
            setError('رمز عبور و تکرار آن یکسان نیستند');
            return;
        }

        if (mode === 'login') {
            login({ email, name });
        } else {
            register({ email, name });
        }

        router.push('/');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm space-y-4"
            >
                <h2 className="text-xl font-bold text-center text-gray-700">
                    {mode === 'login' ? 'ورود به حساب' : 'ایجاد حساب جدید'}
                </h2>

                {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                {mode === 'register' && (
                    <div className="relative">
                        <FiUser className="absolute top-3 left-3 text-gray-400" />
                        <input
                            type="text"
                            placeholder="نام کامل"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>
                )}

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

                {mode === 'register' && (
                    <>
                        <div className="relative">
                            <FiLock className="absolute top-3 left-3 text-gray-400" />
                            <input
                                type="password"
                                placeholder="رمز عبور"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>

                        <div className="relative">
                            <FiLock className="absolute top-3 left-3 text-gray-400" />
                            <input
                                type="password"
                                placeholder="تکرار رمز عبور"
                                value={confirm}
                                onChange={(e) => setConfirm(e.target.value)}
                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>
                    </>
                )}

                <button
                    type="submit"
                    className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition duration-300"
                >
                    {mode === 'login' ? 'ورود' : 'ثبت‌نام'}
                </button>

                <p
                    className="text-sm text-center text-gray-600 cursor-pointer hover:underline mt-2"
                    onClick={() => {
                        setError('');
                        setMode(mode === 'login' ? 'register' : 'login');
                    }}
                >
                    {mode === 'login'
                        ? 'حساب ندارید؟ ثبت‌نام کنید'
                        : 'حساب دارید؟ وارد شوید'}
                </p>
            </form>
        </div>
    );
};

export default AuthForm;
