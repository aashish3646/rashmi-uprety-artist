import { useState } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { PageHeader } from '../../components/admin/PageHeader';
import { FormSection } from '../../components/admin/FormSection';
import { Save } from 'lucide-react';
import portraitImg from '../../assets/images/portrait.jpg';

export function AboutPageEditor() {
  const [bioText, setBioText] = useState(
    'Rashmi Uprety is an actress and theatre artist whose work moves between performance, character and story.'
  );

  return (
    <AdminLayout>
      <PageHeader
        title="Edit About Page"
        subtitle="Manage artist biography, credentials, background text, and portrait imagery."
        actions={
          <button
            onClick={() => alert('Saved changes [Mock Save]')}
            className="px-4 py-2 text-xs font-medium text-white bg-neutral-900 rounded-md hover:bg-neutral-800 flex items-center gap-2"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Save Changes</span>
          </button>
        }
      />

      <div className="space-y-8 max-w-4xl">
        <FormSection
          title="Artist Biography & Philosophy"
          description="Primary background text displayed on the About page."
        >
          <div>
            <label className="block text-xs font-medium text-neutral-700 mb-1">
              Biography Text
            </label>
            <textarea
              rows={5}
              value={bioText}
              onChange={(e) => setBioText(e.target.value)}
              className="w-full p-2.5 bg-white border border-neutral-300 rounded-md text-sm text-neutral-900"
            />
          </div>

          <div className="pt-2">
            <span className="block text-xs font-medium text-neutral-700 mb-2">Featured Portrait Asset</span>
            <div className="w-32 h-44 bg-neutral-900 rounded-md overflow-hidden border border-neutral-300">
              <img src={portraitImg} alt="Portrait asset" className="w-full h-full object-cover" />
            </div>
          </div>
        </FormSection>
      </div>
    </AdminLayout>
  );
}
