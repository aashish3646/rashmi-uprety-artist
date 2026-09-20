import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { PageHeader } from '../../components/admin/PageHeader';
import { FormSection } from '../../components/admin/FormSection';
import { MOCK_PROJECTS } from '../../data/admin/mockAdminData';
import { Save, ArrowLeft } from 'lucide-react';
import pmb4429 from '../../assets/images/PMB04429.jpg';

export function ProjectEditorPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const existing = MOCK_PROJECTS.find((p) => p.id === id);

  const [title, setTitle] = useState(existing ? existing.title : '');
  const [category, setCategory] = useState<'Film' | 'Short Film' | 'Drama' | 'Commercial'>(
    existing ? existing.category : 'Film'
  );
  const [role, setRole] = useState(existing ? existing.role : '');
  const [year, setYear] = useState(existing ? existing.year : new Date().getFullYear().toString());
  const [description, setDescription] = useState(existing ? existing.description : '');
  const [status, setStatus] = useState(existing ? existing.status : 'Draft');

  return (
    <AdminLayout>
      <PageHeader
        title={id && id !== 'new' ? `Edit Project: ${title}` : 'Create New Project'}
        subtitle="Specify screen credit metadata, role, release year, and media attachments."
        actions={
          <div className="flex items-center gap-3">
            <Link
              to="/admin/projects"
              className="px-3 py-2 text-xs font-medium text-neutral-700 bg-white border border-neutral-300 rounded-md hover:bg-neutral-50 flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Projects</span>
            </Link>
            <button
              onClick={() => {
                alert('Project saved [Mock Save]');
                navigate('/admin/projects');
              }}
              className="px-4 py-2 text-xs font-medium text-white bg-neutral-900 rounded-md hover:bg-neutral-800 flex items-center gap-2"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Project</span>
            </button>
          </div>
        }
      />

      <div className="space-y-8 max-w-4xl">
        <FormSection title="Project Details" description="Basic credit title, category, and role info.">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Project Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. The Unspoken Solitude"
                className="w-full p-2.5 bg-white border border-neutral-300 rounded-md text-sm text-neutral-900"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full p-2.5 bg-white border border-neutral-300 rounded-md text-sm text-neutral-900"
              >
                <option value="Film">Film</option>
                <option value="Short Film">Short Film</option>
                <option value="Drama">Drama</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Character / Role
              </label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="e.g. Lead Role"
                className="w-full p-2.5 bg-white border border-neutral-300 rounded-md text-sm text-neutral-900"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Release Year
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
                Publish Status
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
              Description
            </label>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2.5 bg-white border border-neutral-300 rounded-md text-sm text-neutral-900"
            />
          </div>
        </FormSection>

        <FormSection title="Featured Media" description="Select cover photo from existing local assets.">
          <div className="flex items-center gap-4">
            <div className="w-24 h-16 bg-neutral-900 rounded overflow-hidden border border-neutral-300">
              <img src={pmb4429} alt="Project Key Art" className="w-full h-full object-cover" />
            </div>
            <button
              onClick={() => alert('Media Selector Modal [Mock]')}
              className="px-3 py-2 text-xs font-medium text-neutral-700 bg-white border border-neutral-300 rounded-md hover:bg-neutral-50"
            >
              Change Featured Image
            </button>
          </div>
        </FormSection>
      </div>
    </AdminLayout>
  );
}
