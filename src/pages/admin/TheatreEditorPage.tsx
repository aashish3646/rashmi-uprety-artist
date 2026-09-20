import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { PageHeader } from '../../components/admin/PageHeader';
import { FormSection } from '../../components/admin/FormSection';
import { MOCK_THEATRE_PRODUCTIONS } from '../../data/admin/mockAdminData';
import { Save, ArrowLeft } from 'lucide-react';
import theatre1 from '../../assets/images/theatre-1.jpg';

export function TheatreEditorPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const existing = MOCK_THEATRE_PRODUCTIONS.find((t) => t.id === id);

  const [production, setProduction] = useState(existing ? existing.production : '');
  const [character, setCharacter] = useState(existing ? existing.character : '');
  const [director, setDirector] = useState(existing ? existing.director : '');
  const [company, setCompany] = useState(existing ? existing.company : '');
  const [venue, setVenue] = useState(existing ? existing.venue : '');
  const [year, setYear] = useState(existing ? existing.year : new Date().getFullYear().toString());
  const [description, setDescription] = useState(existing ? existing.description : '');
  const [status, setStatus] = useState(existing ? existing.status : 'Draft');

  return (
    <AdminLayout>
      <PageHeader
        title={id && id !== 'new' ? `Edit Stage Production: ${production}` : 'Add Theatre Production'}
        subtitle="Specify stage play metadata, character portrayal, theatre group, and stage photos."
        actions={
          <div className="flex items-center gap-3">
            <Link
              to="/admin/theatre"
              className="px-3 py-2 text-xs font-medium text-neutral-700 bg-white border border-neutral-300 rounded-md hover:bg-neutral-50 flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Theatre</span>
            </Link>
            <button
              onClick={() => {
                alert('Production saved [Mock Save]');
                navigate('/admin/theatre');
              }}
              className="px-4 py-2 text-xs font-medium text-white bg-neutral-900 rounded-md hover:bg-neutral-800 flex items-center gap-2"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Production</span>
            </button>
          </div>
        }
      />

      <div className="space-y-8 max-w-4xl">
        <FormSection title="Production & Character Details" description="Play name, character, director, and theatre company.">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Production Name
              </label>
              <input
                type="text"
                value={production}
                onChange={(e) => setProduction(e.target.value)}
                placeholder="e.g. The Cherry Orchard"
                className="w-full p-2.5 bg-white border border-neutral-300 rounded-md text-sm text-neutral-900"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Character Portrayed
              </label>
              <input
                type="text"
                value={character}
                onChange={(e) => setCharacter(e.target.value)}
                placeholder="e.g. Varya"
                className="w-full p-2.5 bg-white border border-neutral-300 rounded-md text-sm text-neutral-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Director
              </label>
              <input
                type="text"
                value={director}
                onChange={(e) => setDirector(e.target.value)}
                className="w-full p-2.5 bg-white border border-neutral-300 rounded-md text-sm text-neutral-900"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Theatre Company / Group
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full p-2.5 bg-white border border-neutral-300 rounded-md text-sm text-neutral-900"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Venue
              </label>
              <input
                type="text"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
                className="w-full p-2.5 bg-white border border-neutral-300 rounded-md text-sm text-neutral-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Performance Year
              </label>
              <input
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full p-2.5 bg-white border border-neutral-300 rounded-md text-sm text-neutral-900"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as any)}
                className="w-full p-2.5 bg-white border border-neutral-300 rounded-md text-sm text-neutral-900"
              >
                <option value="Published">Published</option>
                <option value="Draft">Draft</option>
                <option value="Archived">Archived</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-700 mb-1">
              Synopsis / Description
            </label>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2.5 bg-white border border-neutral-300 rounded-md text-sm text-neutral-900"
            />
          </div>
        </FormSection>

        <FormSection title="Featured Stage Photography" description="Stage still image attachment.">
          <div className="flex items-center gap-4">
            <div className="w-24 h-16 bg-neutral-900 rounded overflow-hidden border border-neutral-300">
              <img src={theatre1} alt="Stage preview" className="w-full h-full object-cover" />
            </div>
            <button
              onClick={() => alert('Media Selector Modal [Mock]')}
              className="px-3 py-2 text-xs font-medium text-neutral-700 bg-white border border-neutral-300 rounded-md hover:bg-neutral-50"
            >
              Change Stage Photo
            </button>
          </div>
        </FormSection>
      </div>
    </AdminLayout>
  );
}
