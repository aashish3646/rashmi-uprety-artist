import { useState } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { PageHeader } from '../../components/admin/PageHeader';
import { FormSection } from '../../components/admin/FormSection';
import { StatusBadge } from '../../components/admin/StatusBadge';
import { Save, Eye } from 'lucide-react';
import mainPhoto from '../../assets/images/Main Photo.jpg';

export function HomePageEditor() {
  const [heroTitle, setHeroTitle] = useState('RASHMI UPRETY');
  const [heroSubtitle, setHeroSubtitle] = useState('ACTRESS · THEATRE ARTIST');
  const [ctaLabel, setCtaLabel] = useState('VIEW MY WORK →');
  const [selectedHeroImage] = useState('Main Photo.jpg');
  const [introText, setIntroText] = useState(
    'Rashmi Uprety is an actress and theatre artist whose work moves between performance, character and story.'
  );

  return (
    <AdminLayout>
      <PageHeader
        title="Edit Home Page"
        subtitle="Manage hero typography, imagery, introduction block, and section order."
        actions={
          <div className="flex items-center gap-3">
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 text-xs font-medium text-neutral-700 bg-white border border-neutral-300 rounded-md hover:bg-neutral-50 flex items-center gap-2"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Preview Live</span>
            </a>
            <button
              onClick={() => alert('Saved changes [Mock Save]')}
              className="px-4 py-2 text-xs font-medium text-white bg-neutral-900 rounded-md hover:bg-neutral-800 flex items-center gap-2"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Changes</span>
            </button>
          </div>
        }
      />

      <div className="space-y-8 max-w-4xl">
        {/* Section 1: Hero Settings */}
        <FormSection
          title="Section 1 — Hero Configuration"
          description="Primary above-the-fold photograph and headline layout."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Main Headline Title
              </label>
              <input
                type="text"
                value={heroTitle}
                onChange={(e) => setHeroTitle(e.target.value)}
                className="w-full p-2.5 bg-white border border-neutral-300 rounded-md text-sm text-neutral-900"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Subtitle Tagline
              </label>
              <input
                type="text"
                value={heroSubtitle}
                onChange={(e) => setHeroSubtitle(e.target.value)}
                className="w-full p-2.5 bg-white border border-neutral-300 rounded-md text-sm text-neutral-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Primary CTA Button Label
              </label>
              <input
                type="text"
                value={ctaLabel}
                onChange={(e) => setCtaLabel(e.target.value)}
                className="w-full p-2.5 bg-white border border-neutral-300 rounded-md text-sm text-neutral-900"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Selected Hero Image Asset
              </label>
              <input
                type="text"
                disabled
                value={selectedHeroImage}
                className="w-full p-2.5 bg-neutral-100 border border-neutral-200 rounded-md text-sm text-neutral-600 cursor-not-allowed"
              />
            </div>
          </div>

          <div className="pt-2">
            <span className="block text-xs font-medium text-neutral-700 mb-2">Hero Image Preview</span>
            <div className="w-32 h-44 bg-neutral-900 rounded-md overflow-hidden border border-neutral-300">
              <img src={mainPhoto} alt="Hero preview" className="w-full h-full object-cover" />
            </div>
          </div>
        </FormSection>

        {/* Section 2: Introduction Block */}
        <FormSection
          title="Section 2 — Introduction Statement"
          description="Editorial quote and biography highlight."
        >
          <div>
            <label className="block text-xs font-medium text-neutral-700 mb-1">
              Featured Artist Quote
            </label>
            <textarea
              rows={3}
              value={introText}
              onChange={(e) => setIntroText(e.target.value)}
              className="w-full p-2.5 bg-white border border-neutral-300 rounded-md text-sm text-neutral-900"
            />
          </div>
        </FormSection>

        {/* Section Visibility Toggles */}
        <FormSection
          title="Homepage Sections Visibility"
          description="Enable or disable specific sections on the public homepage."
        >
          <div className="space-y-3">
            {['Hero Section', 'Introduction Block', 'Selected Work Showcase', 'Theatre Highlight', 'Showreel Preview', 'Contact CTA'].map((sec) => (
              <div key={sec} className="flex items-center justify-between p-3 bg-neutral-50 border border-neutral-200 rounded-md">
                <span className="text-xs font-medium text-neutral-800">{sec}</span>
                <StatusBadge status="Published" />
              </div>
            ))}
          </div>
        </FormSection>
      </div>
    </AdminLayout>
  );
}
