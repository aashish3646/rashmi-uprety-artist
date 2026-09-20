import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { PageHeader } from '../../components/admin/PageHeader';
import { FilterBar } from '../../components/admin/FilterBar';
import { SearchBar } from '../../components/admin/SearchBar';
import { DataTable, Column } from '../../components/admin/DataTable';
import { StatusBadge } from '../../components/admin/StatusBadge';
import { MOCK_THEATRE_PRODUCTIONS } from '../../data/admin/mockAdminData';
import { AdminTheatreProduction } from '../../types/admin';
import { Plus } from 'lucide-react';

export function TheatreListPage() {
  const [search, setSearch] = useState('');
  const [productions] = useState<AdminTheatreProduction[]>(MOCK_THEATRE_PRODUCTIONS);

  const filtered = productions.filter(
    (t) =>
      t.production.toLowerCase().includes(search.toLowerCase()) ||
      t.character.toLowerCase().includes(search.toLowerCase()) ||
      t.venue.toLowerCase().includes(search.toLowerCase())
  );

  const columns: Column<AdminTheatreProduction>[] = [
    {
      key: 'production',
      header: 'Production',
      render: (item) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-neutral-100 rounded overflow-hidden border border-neutral-200">
            <img src={item.featuredImage} alt={item.production} className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="font-semibold text-neutral-900 block">{item.production}</span>
            <span className="text-xs text-neutral-400">{item.company}</span>
          </div>
        </div>
      ),
    },
    { key: 'character', header: 'Character' },
    { key: 'director', header: 'Director' },
    { key: 'year', header: 'Year' },
    {
      key: 'status',
      header: 'Status',
      render: (item) => <StatusBadge status={item.status} />,
    },
    {
      key: 'actions',
      header: 'Actions',
      render: (item) => (
        <Link
          to={`/admin/theatre/${item.id}`}
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
        title="Theatre Productions"
        subtitle="Manage live stage performance credits, directors, venues, and theatre media."
        actions={
          <Link
            to="/admin/theatre/new"
            className="px-4 py-2 text-xs font-medium text-white bg-neutral-900 rounded-md hover:bg-neutral-800 flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add Production</span>
          </Link>
        }
      />

      <FilterBar>
        <SearchBar value={search} onChange={setSearch} placeholder="Search by play, character, or venue..." />
      </FilterBar>

      <DataTable columns={columns} data={filtered} keyExtractor={(item) => item.id} />
    </AdminLayout>
  );
}
