import { useState } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { PageHeader } from '../../components/admin/PageHeader';
import { FormSection } from '../../components/admin/FormSection';
import { MOCK_SITE_SETTINGS } from '../../data/admin/mockAdminData';
import { Save } from 'lucide-react';

export function SiteSettingsPage() {
  const [siteName, setSiteName] = useState(MOCK_SITE_SETTINGS.siteName);
  const [tagline, setTagline] = useState(MOCK_SITE_SETTINGS.tagline);
  const [email, setEmail] = useState(MOCK_SITE_SETTINGS.contactEmail);
  const [phone, setPhone] = useState(MOCK_SITE_SETTINGS.contactPhone);
  const [instagram, setInstagram] = useState(MOCK_SITE_SETTINGS.instagramUrl);
  const [facebook, setFacebook] = useState(MOCK_SITE_SETTINGS.facebookUrl);
  const [youtube, setYoutube] = useState(MOCK_SITE_SETTINGS.youtubeUrl);
  const [metaTitle, setMetaTitle] = useState(MOCK_SITE_SETTINGS.metaTitle);
  const [metaDesc, setMetaDesc] = useState(MOCK_SITE_SETTINGS.metaDescription);

  return (
    <AdminLayout>
      <PageHeader
        title="Site Settings"
        subtitle="Manage website global settings, contact representation, social profile links, and SEO defaults."
        actions={
          <button
            onClick={() => alert('Settings saved [Mock Save]')}
            className="px-4 py-2 text-xs font-medium text-white bg-neutral-900 rounded-md hover:bg-neutral-800 flex items-center gap-2"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Save Settings</span>
          </button>
        }
      />

      <div className="space-y-8 max-w-4xl">
        {/* General */}
        <FormSection title="General Information" description="Site branding title and official tagline.">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Site Name
              </label>
              <input
                type="text"
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
                className="w-full p-2.5 bg-white border border-neutral-300 rounded-md text-sm text-neutral-900"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Tagline / Profession
              </label>
              <input
                type="text"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                className="w-full p-2.5 bg-white border border-neutral-300 rounded-md text-sm text-neutral-900"
              />
            </div>
          </div>
        </FormSection>

        {/* Contact */}
        <FormSection title="Representation Contact Info" description="Inquiry email and phone contact details.">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Contact Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2.5 bg-white border border-neutral-300 rounded-md text-sm text-neutral-900"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Contact Phone
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2.5 bg-white border border-neutral-300 rounded-md text-sm text-neutral-900"
              />
            </div>
          </div>
        </FormSection>

        {/* Social */}
        <FormSection title="Social Media Profiles" description="URLs for social media platform links.">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Instagram URL
              </label>
              <input
                type="text"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                className="w-full p-2.5 bg-white border border-neutral-300 rounded-md text-sm text-neutral-900"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Facebook URL
              </label>
              <input
                type="text"
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
                className="w-full p-2.5 bg-white border border-neutral-300 rounded-md text-sm text-neutral-900"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                YouTube Channel
              </label>
              <input
                type="text"
                value={youtube}
                onChange={(e) => setYoutube(e.target.value)}
                className="w-full p-2.5 bg-white border border-neutral-300 rounded-md text-sm text-neutral-900"
              />
            </div>
          </div>
        </FormSection>

        {/* SEO */}
        <FormSection title="Search Engine Optimization (SEO)" description="Default search metadata and page titles.">
          <div>
            <label className="block text-xs font-medium text-neutral-700 mb-1">
              Meta Title
            </label>
            <input
              type="text"
              value={metaTitle}
              onChange={(e) => setMetaTitle(e.target.value)}
              className="w-full p-2.5 bg-white border border-neutral-300 rounded-md text-sm text-neutral-900"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-neutral-700 mb-1">
              Meta Description
            </label>
            <textarea
              rows={3}
              value={metaDesc}
              onChange={(e) => setMetaDesc(e.target.value)}
              className="w-full p-2.5 bg-white border border-neutral-300 rounded-md text-sm text-neutral-900"
            />
          </div>
        </FormSection>
      </div>
    </AdminLayout>
  );
}
