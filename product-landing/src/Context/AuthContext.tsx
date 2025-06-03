'use client';
import {createContext, useContext, useState, useEffect, ReactNode} from 'react';

type User = {
    name: string;
    email: string;
};

type AuthContextType = {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
    register: (user: User) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('auth-user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (user: User) => {
        setUser(user);
        localStorage.setItem('auth-user', JSON.stringify(user));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('auth-user');
    };

    const register = (user: User) => {
        setUser(user);
        localStorage.setItem('auth-user', JSON.stringify(user));
    };

    return (
        <AuthContext.Provider value={{user, login, logout, register}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
    return ctx;
};
