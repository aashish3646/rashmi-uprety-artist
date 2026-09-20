import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { PageHeader } from '../../components/admin/PageHeader';
import { FilterBar } from '../../components/admin/FilterBar';
import { SearchBar } from '../../components/admin/SearchBar';
import { DataTable, Column } from '../../components/admin/DataTable';
import { StatusBadge } from '../../components/admin/StatusBadge';
import { MOCK_PAGES } from '../../data/admin/mockAdminData';
import { AdminPageSummary } from '../../types/admin';

export function ContentListPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredPages = MOCK_PAGES.filter((page) => {
    const matchesSearch = page.title.toLowerCase().includes(search.toLowerCase()) || page.path.includes(search);
    const matchesStatus = statusFilter === 'All' || page.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const columns: Column<AdminPageSummary>[] = [
    {
      key: 'title',
      header: 'Page Title',
      render: (item) => (
        <div>
          <span className="font-medium text-neutral-900 block">{item.title}</span>
          <span className="text-xs text-neutral-400 font-mono">{item.path}</span>
        </div>
      ),
    },
    {
      key: 'sectionsCount',
      header: 'Sections',
      render: (item) => <span>{item.sectionsCount} Sections</span>,
    },
    {
      key: 'status',
      header: 'Status',
      render: (item) => <StatusBadge status={item.status} />,
    },
    {
      key: 'lastUpdated',
      header: 'Last Updated',
      render: (item) => <span className="text-xs text-neutral-500">{item.lastUpdated}</span>,
    },
    {
      key: 'actions',
      header: 'Actions',
      render: (item) => (
        <Link
          to={`/admin/content/${item.title.toLowerCase()}`}
          className="text-xs font-semibold text-neutral-900 hover:underline"
        >
          Edit Page →
        </Link>
      ),
    },
  ];

  return (
    <AdminLayout>
      <PageHeader
        title="Page Content Management"
        subtitle="Manage sections and textual configuration across all website pages."
      />

      <FilterBar>
        <SearchBar value={search} onChange={setSearch} placeholder="Search pages..." />
        <div className="flex items-center gap-3">
          <label className="text-xs text-neutral-500 font-sans">Status:</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-1.5 bg-white border border-neutral-300 rounded-md text-xs font-sans text-neutral-800"
          >
            <option value="All">All Statuses</option>
            <option value="Published">Published</option>
            <option value="Draft">Draft</option>
          </select>
        </div>
      </FilterBar>

      <DataTable
        columns={columns}
        data={filteredPages}
        keyExtractor={(item) => item.id}
      />
    </AdminLayout>
  );
}
