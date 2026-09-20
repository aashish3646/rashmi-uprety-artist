import { useState, FormEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Lock, KeyRound, AlertCircle, ArrowLeft } from 'lucide-react';

export function AdminLoginPage() {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from?.pathname || '/admin';

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!passcode.trim()) {
      setError('Please enter your admin passcode.');
      return;
    }

    setIsLoading(true);
    const success = await login(passcode);
    setIsLoading(false);
    
    if (success) {
      navigate(from, { replace: true });
    } else {
      setError('Invalid passcode. Access denied.');
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 flex items-center justify-center p-4 font-sans">
      <div className="max-w-md w-full bg-neutral-800 border border-neutral-700 rounded-xl p-8 shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-neutral-700 text-amber-400 rounded-full flex items-center justify-center mx-auto border border-neutral-600">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="font-serif text-2xl tracking-wider text-white">RASHMI UPRETY</h1>
          <p className="text-xs text-neutral-400 tracking-widest uppercase">Admin CMS Access Control</p>
        </div>

        {error && (
          <div className="p-3 bg-red-950/60 border border-red-800/80 rounded-md flex items-center gap-2 text-xs text-red-300">
            <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-400" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="passcode" className="block text-xs font-medium text-neutral-300 mb-1.5">
              Admin Security Passcode
            </label>
            <div className="relative">
              <KeyRound className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
              <input
                type="password"
                id="passcode"
                value={passcode}
                onChange={(e) => {
                  setPasscode(e.target.value);
                  setError('');
                }}
                placeholder="Enter passcode..."
                className="w-full pl-9 pr-4 py-2.5 bg-neutral-900 border border-neutral-700 rounded-md text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-amber-500 transition-colors"
                autoFocus
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2.5 bg-white text-neutral-900 font-semibold text-xs tracking-wider uppercase rounded-md hover:bg-neutral-200 transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Verifying Credentials...' : 'Authenticate & Access CMS'}
          </button>
        </form>

        <div className="pt-4 border-t border-neutral-700/60 text-center flex items-center justify-between text-xs text-neutral-400">
          <a href="/" className="hover:text-white flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Website</span>
          </a>
          <span className="text-[10px] text-neutral-500 font-mono">Demo: rashmi2026</span>
        </div>
      </div>
    </div>
  );
}
