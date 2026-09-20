import { useState } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { PageHeader } from '../../components/admin/PageHeader';
import { FormSection } from '../../components/admin/FormSection';
import { StatusBadge } from '../../components/admin/StatusBadge';
import { IMAGE_REGISTRY } from '../../data/contentData';
import { Save, Eye, Image as ImageIcon, X } from 'lucide-react';

export function HomePageEditor() {
  const [heroTitle, setHeroTitle] = useState('RASHMI UPRETY');
  const [heroSubtitle, setHeroSubtitle] = useState('ACTRESS · THEATRE ARTIST');
  const [ctaLabel, setCtaLabel] = useState('VIEW MY WORK →');
  const [introText, setIntroText] = useState(
    'Rashmi Uprety is an actress and theatre artist whose work moves between performance, character and story.'
  );

  // Section Image Assignments via Media Library
  const [heroImgKey, setHeroImgKey] = useState('main-photo');
  const [introImgKey, setIntroImgKey] = useState('portrait-editorial');
  const [theatreImgKey, setTheatreImgKey] = useState('theatre-stage-1');
  const [showreelImgKey, setShowreelImgKey] = useState('showreel-img9578');
  const [contactImgKey, setContactImgKey] = useState('contact-img9625');

  const [activeSelectorTarget, setActiveSelectorTarget] = useState<string | null>(null);

  const heroAsset = IMAGE_REGISTRY[heroImgKey];
  const introAsset = IMAGE_REGISTRY[introImgKey];
  const theatreAsset = IMAGE_REGISTRY[theatreImgKey];
  const showreelAsset = IMAGE_REGISTRY[showreelImgKey];
  const contactAsset = IMAGE_REGISTRY[contactImgKey];

  return (
    <AdminLayout>
      <PageHeader
        title="Edit Home Page"
        subtitle="Manage hero typography, imagery, introduction block, and individual section image assignments."
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
              onClick={() => alert('Saved homepage image assignments & configuration [Mock Save]')}
              className="px-4 py-2 text-xs font-medium text-white bg-neutral-900 rounded-md hover:bg-neutral-800 flex items-center gap-2"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Changes</span>
            </button>
          </div>
        }
      />

      <div className="space-y-8 max-w-4xl">
        {/* Section 1: Hero Configuration */}
        <FormSection
          title="Section 1 — Hero Configuration"
          description="Headline typography and cinematic hero photograph."
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
                Assigned Hero Photograph
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  disabled
                  value={heroAsset.filename}
                  className="w-full p-2.5 bg-neutral-100 border border-neutral-200 rounded-md text-sm text-neutral-700 cursor-not-allowed font-medium"
                />
                <button
                  onClick={() => setActiveSelectorTarget('hero')}
                  className="px-3 py-2.5 text-xs font-medium text-neutral-800 bg-white border border-neutral-300 rounded-md hover:bg-neutral-50 flex items-center gap-1.5 whitespace-nowrap"
                >
                  <ImageIcon className="w-4 h-4" />
                  <span>Choose Image</span>
                </button>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <span className="block text-xs font-medium text-neutral-700 mb-2">Hero Image Preview</span>
            <div className="w-32 h-44 bg-neutral-900 rounded-md overflow-hidden border border-neutral-300 relative">
              <img src={heroAsset.src} alt={heroAsset.alt} className="w-full h-full object-cover" />
            </div>
          </div>
        </FormSection>

        {/* Section 2: Introduction Block */}
        <FormSection
          title="Section 2 — Introduction Image & Quote"
          description="Separate portrait assignment for artist introduction."
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

          <div className="pt-2">
            <span className="block text-xs font-medium text-neutral-700 mb-2">Assigned Introduction Portrait</span>
            <div className="flex items-center gap-4">
              <div className="w-24 h-32 bg-neutral-900 rounded-md overflow-hidden border border-neutral-300">
                <img src={introAsset.src} alt={introAsset.alt} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-semibold text-neutral-900 block">{introAsset.filename}</span>
                <span className="text-xs text-neutral-500 block">Category: {introAsset.category}</span>
                <button
                  onClick={() => setActiveSelectorTarget('intro')}
                  className="px-3 py-1.5 text-xs font-medium text-neutral-800 bg-white border border-neutral-300 rounded-md hover:bg-neutral-50"
                >
                  Replace Introduction Image
                </button>
              </div>
            </div>
          </div>
        </FormSection>

        {/* Section 3: Theatre Highlight */}
        <FormSection
          title="Section 4 — Theatre Stage Photography"
          description="Stage performance image selector."
        >
          <div className="flex items-center gap-4">
            <div className="w-32 h-20 bg-neutral-900 rounded-md overflow-hidden border border-neutral-300">
              <img src={theatreAsset.src} alt={theatreAsset.alt} className="w-full h-full object-cover" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-semibold text-neutral-900 block">{theatreAsset.filename}</span>
              <span className="text-xs text-neutral-500 block">Category: {theatreAsset.category}</span>
              <button
                onClick={() => setActiveSelectorTarget('theatre')}
                className="px-3 py-1.5 text-xs font-medium text-neutral-800 bg-white border border-neutral-300 rounded-md hover:bg-neutral-50"
              >
                Replace Stage Image
              </button>
            </div>
          </div>
        </FormSection>

        {/* Section 4: Showreel & Contact */}
        <FormSection
          title="Section 5 & 6 — Showreel & Contact Imagery"
          description="Distinct thumbnail and serene background assets."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <span className="block text-xs font-medium text-neutral-700">Showreel Thumbnail Asset</span>
              <div className="w-full h-28 bg-neutral-900 rounded-md overflow-hidden border border-neutral-300">
                <img src={showreelAsset.src} alt={showreelAsset.alt} className="w-full h-full object-cover" />
              </div>
              <button
                onClick={() => setActiveSelectorTarget('showreel')}
                className="w-full py-1.5 text-xs font-medium text-neutral-800 bg-white border border-neutral-300 rounded-md hover:bg-neutral-50"
              >
                Select Showreel Image
              </button>
            </div>

            <div className="space-y-2">
              <span className="block text-xs font-medium text-neutral-700">Contact Background Asset</span>
              <div className="w-full h-28 bg-neutral-900 rounded-md overflow-hidden border border-neutral-300">
                <img src={contactAsset.src} alt={contactAsset.alt} className="w-full h-full object-cover opacity-80" />
              </div>
              <button
                onClick={() => setActiveSelectorTarget('contact')}
                className="w-full py-1.5 text-xs font-medium text-neutral-800 bg-white border border-neutral-300 rounded-md hover:bg-neutral-50"
              >
                Select Contact Image
              </button>
            </div>
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

      {/* Media Selector Modal Overlay */}
      {activeSelectorTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/50 backdrop-blur-xs">
          <div className="bg-white rounded-lg border border-neutral-200 shadow-2xl max-w-3xl w-full p-6 space-y-4 max-h-[85vh] overflow-y-auto font-sans">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <div>
                <h3 className="text-base font-semibold text-neutral-900">
                  Select Media for {activeSelectorTarget.toUpperCase()} Section
                </h3>
                <p className="text-xs text-neutral-500">
                  Choose a distinct real photograph from the Media Registry.
                </p>
              </div>
              <button onClick={() => setActiveSelectorTarget(null)} className="text-neutral-400 hover:text-neutral-600 p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-2">
              {Object.values(IMAGE_REGISTRY).map((asset) => (
                <div
                  key={asset.imageId}
                  onClick={() => {
                    if (activeSelectorTarget === 'hero') setHeroImgKey(asset.imageId);
                    if (activeSelectorTarget === 'intro') setIntroImgKey(asset.imageId);
                    if (activeSelectorTarget === 'theatre') setTheatreImgKey(asset.imageId);
                    if (activeSelectorTarget === 'showreel') setShowreelImgKey(asset.imageId);
                    if (activeSelectorTarget === 'contact') setContactImgKey(asset.imageId);
                    setActiveSelectorTarget(null);
                  }}
                  className="group border border-neutral-200 rounded-md overflow-hidden cursor-pointer hover:border-neutral-900 hover:shadow-md transition-all"
                >
                  <div className="aspect-square bg-neutral-900 overflow-hidden relative">
                    <img src={asset.src} alt={asset.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-2 text-xs">
                    <span className="font-semibold text-neutral-800 block truncate">{asset.filename}</span>
                    <span className="text-[10px] text-neutral-400 capitalize">{asset.category} • {asset.orientation}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
