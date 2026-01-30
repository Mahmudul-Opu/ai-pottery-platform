'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { authAPI, setAuthToken, removeAuthToken, type User } from '@/lib/api';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (data: {
    username: string;
    email: string;
    password: string;
    role: 'artisan' | 'customer';
    bio?: string;
    specialization?: string;
    years_of_experience?: number;
    location?: string;
  }) => Promise<void>;
  logout: () => void;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load user on mount
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      setLoading(true);
      const response = await authAPI.getCurrentUser();
      setUser(response.user);
      setError(null);
    } catch (err) {
      // If token is invalid, clear it
      removeAuthToken();
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      setError(null);
      const response = await authAPI.login({ email, password });
      setAuthToken(response.access_token);
      setUser(response.user);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Login failed';
      setError(message);
      throw err;
    }
  };

  const signup = async (data: {
    username: string;
    email: string;
    password: string;
    role: 'artisan' | 'customer';
    bio?: string;
    specialization?: string;
    years_of_experience?: number;
    location?: string;
  }) => {
    try {
      setError(null);
      const response = await authAPI.signup(data);
      setAuthToken(response.access_token);
      setUser(response.user);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Signup failed';
      setError(message);
      throw err;
    }
  };

  const logout = () => {
    removeAuthToken();
    setUser(null);
    setError(null);
  };

  const refreshUser = async () => {
    await loadUser();
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, signup, logout, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
