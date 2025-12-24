import { useState, useEffect, ReactNode } from 'react';
import { authAdapter } from '@/shared/api/auth';
import { AuthContext } from './auth-context';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = authAdapter.onAuthStateChange((currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
      if (window.location.href.endsWith('#')) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, setIsLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
