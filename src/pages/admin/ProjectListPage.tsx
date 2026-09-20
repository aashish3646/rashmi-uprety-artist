import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { PageHeader } from '../../components/admin/PageHeader';
import { FilterBar } from '../../components/admin/FilterBar';
import { SearchBar } from '../../components/admin/SearchBar';
import { DataTable, Column } from '../../components/admin/DataTable';
import { StatusBadge } from '../../components/admin/StatusBadge';
import { MOCK_PROJECTS } from '../../data/admin/mockAdminData';
import { AdminProject } from '../../types/admin';
import { Plus } from 'lucide-react';

export function ProjectListPage() {
  const [search, setSearch] = useState('');
  const [projects] = useState<AdminProject[]>(MOCK_PROJECTS);

  const filtered = projects.filter(
    (p) => p.title.toLowerCase().includes(search.toLowerCase()) || p.role.toLowerCase().includes(search.toLowerCase())
  );

  const columns: Column<AdminProject>[] = [
    {
      key: 'title',
      header: 'Title',
      render: (item) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-neutral-100 rounded overflow-hidden border border-neutral-200">
            <img src={item.featuredImage} alt={item.title} className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="font-semibold text-neutral-900 block">{item.title}</span>
            <span className="text-xs text-neutral-400">{item.category}</span>
          </div>
        </div>
      ),
    },
    { key: 'role', header: 'Role' },
    { key: 'year', header: 'Year' },
    {
      key: 'status',
      header: 'Status',
      render: (item) => <StatusBadge status={item.status} />,
    },
    { key: 'lastUpdated', header: 'Updated' },
    {
      key: 'actions',
      header: 'Actions',
      render: (item) => (
        <Link
          to={`/admin/projects/${item.id}`}
          className="text-xs font-semibold text-neutral-900 hover:underline"
        >
          Edit
        </Link>
      ),
    },
  ];

  return (
    <AdminLayout>
      <PageHeader
        title="Project Management"
        subtitle="Manage film credits, short films, and dramatic screen performances."
        actions={
          <Link
            to="/admin/projects/new"
            className="px-4 py-2 text-xs font-medium text-white bg-neutral-900 rounded-md hover:bg-neutral-800 flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add Project</span>
          </Link>
        }
      />

      <FilterBar>
        <SearchBar value={search} onChange={setSearch} placeholder="Search projects by title or role..." />
      </FilterBar>

      <DataTable columns={columns} data={filtered} keyExtractor={(item) => item.id} />
    </AdminLayout>
  );
}
