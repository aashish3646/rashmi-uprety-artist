import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (passcode: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const ADMIN_TOKEN_KEY = 'rashmi_admin_auth_token';
const ADMIN_EXPIRE_KEY = 'rashmi_admin_auth_expires';

// SHA-256 hashes for valid passcodes ("rashmi2026", "admin123")
const ALLOWED_PASSCODE_HASHES = [
  'c0c804f56fbd8cf90da907f18b14a22bf4577884ff5f5b2bd1eb5eb3d15c7e39', // rashmi2026
  '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9', // admin123
];

async function hashPasscode(passcode: string): Promise<string> {
  const msgUint8 = new TextEncoder().encode(passcode);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const token = localStorage.getItem(ADMIN_TOKEN_KEY);
    const expires = localStorage.getItem(ADMIN_EXPIRE_KEY);
    if (!token || !expires) return false;

    // Check if token has expired (8 hours expiry)
    if (Date.now() > parseInt(expires, 10)) {
      localStorage.removeItem(ADMIN_TOKEN_KEY);
      localStorage.removeItem(ADMIN_EXPIRE_KEY);
      return false;
    }

    return true;
  });

  const login = async (passcode: string): Promise<boolean> => {
    try {
      const hashed = await hashPasscode(passcode);
      if (ALLOWED_PASSCODE_HASHES.includes(hashed)) {
        // Generate simulated secure session token & set 8-hour expiration
        const token = Array.from(crypto.getRandomValues(new Uint8Array(32)))
          .map((b) => b.toString(16).padStart(2, '0'))
          .join('');
        const expireTime = Date.now() + 8 * 60 * 60 * 1000;

        localStorage.setItem(ADMIN_TOKEN_KEY, token);
        localStorage.setItem(ADMIN_EXPIRE_KEY, expireTime.toString());
        setIsAuthenticated(true);
        return true;
      }
    } catch (err) {
      console.error('Authentication hashing failed', err);
    }

    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem(ADMIN_TOKEN_KEY);
    localStorage.removeItem(ADMIN_EXPIRE_KEY);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

