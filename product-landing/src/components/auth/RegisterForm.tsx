'use client';
import {useState} from 'react';
import {useRouter} from 'next/router';
import {useAuth} from '@/Context/AuthContext';
import {FiUser, FiMail, FiLock} from 'react-icons/fi';

const RegisterForm = () => {
    const {register} = useAuth();
    const router = useRouter();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState('');

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !email || !password || !confirm) {
            setError('لطفاً همه فیلدها را پر کنید');
            return;
        }

        if (password !== confirm) {
            setError('رمزها یکسان نیستند');
            return;
        }

        register({name, email});
        router.push('/');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
            <form
                onSubmit={handleRegister}
                className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm space-y-4"
            >
                <h2 className="text-xl font-bold text-center text-green-600">ساخت حساب جدید</h2>

                {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                <div className="relative">
                    <FiUser className="absolute top-3 left-3 text-gray-400"/>
                    <input
                        type="text"
                        placeholder="نام کامل"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-400"
                    />
                </div>

                <div className="relative">
                    <FiMail className="absolute top-3 left-3 text-gray-400"/>
                    <input
                        type="email"
                        placeholder="ایمیل"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-400"
                    />
                </div>

                <div className="relative">
                    <FiLock className="absolute top-3 left-3 text-gray-400"/>
                    <input
                        type="password"
                        placeholder="رمز عبور"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-400"
                    />
                </div>

                <div className="relative">
                    <FiLock className="absolute top-3 left-3 text-gray-400"/>
                    <input
                        type="password"
                        placeholder="تکرار رمز عبور"
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-400"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
                >
                    ثبت‌نام
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;
