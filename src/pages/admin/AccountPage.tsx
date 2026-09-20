import { useState } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { PageHeader } from '../../components/admin/PageHeader';
import { FormSection } from '../../components/admin/FormSection';
import { Save, UserCheck, Shield } from 'lucide-react';

export function AccountPage() {
  const [name, setName] = useState('Rashmi Uprety Administrator');
  const [email, setEmail] = useState('admin@rashmiuprety.com');

  return (
    <AdminLayout>
      <PageHeader
        title="Admin Account Profile"
        subtitle="Manage administrator access credentials and security settings."
        actions={
          <button
            onClick={() => alert('Account profile updated [Mock Save]')}
            className="px-4 py-2 text-xs font-medium text-white bg-neutral-900 rounded-md hover:bg-neutral-800 flex items-center gap-2"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Save Profile</span>
          </button>
        }
      />

      <div className="space-y-8 max-w-4xl">
        <FormSection title="Administrator Profile" description="Your administrator account details.">
          <div className="flex items-center gap-4 pb-4">
            <div className="w-14 h-14 rounded-full bg-neutral-900 text-white flex items-center justify-center text-lg font-semibold">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="font-semibold text-neutral-900 block">{name}</span>
              <span className="text-xs text-neutral-400">Super Administrator</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Display Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2.5 bg-white border border-neutral-300 rounded-md text-sm text-neutral-900"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2.5 bg-white border border-neutral-300 rounded-md text-sm text-neutral-900"
              />
            </div>
          </div>
        </FormSection>

        <FormSection title="Security & Password Placeholder" description="Authentication setup will be implemented in Phase 3 backend integration.">
          <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-md text-xs text-amber-800">
            <Shield className="w-5 h-5 flex-shrink-0 text-amber-600 mt-0.5" />
            <div className="space-y-1">
              <span className="font-semibold block">Phase 2 Local UI Placeholder</span>
              <p>
                Password modification and multi-factor authentication controls are prepared in the interface layout. Real authentication connection will occur during Phase 3.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 opacity-60 pointer-events-none">
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                New Password
              </label>
              <input
                type="password"
                placeholder="••••••••••••"
                className="w-full p-2.5 bg-neutral-100 border border-neutral-300 rounded-md text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="••••••••••••"
                className="w-full p-2.5 bg-neutral-100 border border-neutral-300 rounded-md text-sm"
              />
            </div>
          </div>
        </FormSection>
      </div>
    </AdminLayout>
  );
}
