import { useState } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { PageHeader } from '../../components/admin/PageHeader';
import { FilterBar } from '../../components/admin/FilterBar';
import { SearchBar } from '../../components/admin/SearchBar';
import { DataTable, Column } from '../../components/admin/DataTable';
import { StatusBadge } from '../../components/admin/StatusBadge';
import { MOCK_INQUIRIES } from '../../data/admin/mockAdminData';
import { AdminInquiry } from '../../types/admin';
import { Mail, X } from 'lucide-react';

export function InquiriesPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedInquiry, setSelectedInquiry] = useState<AdminInquiry | null>(null);

  const filtered = MOCK_INQUIRIES.filter((inq) => {
    const matchesSearch = inq.name.toLowerCase().includes(search.toLowerCase()) || inq.subject.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'All' || inq.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const columns: Column<AdminInquiry>[] = [
    {
      key: 'name',
      header: 'Sender Name',
      render: (item) => (
        <div>
          <span className="font-semibold text-neutral-900 block">{item.name}</span>
          <span className="text-xs text-neutral-400 font-mono">{item.email}</span>
        </div>
      ),
    },
    { key: 'subject', header: 'Subject' },
    { key: 'date', header: 'Received Date' },
    {
      key: 'status',
      header: 'Status',
      render: (item) => <StatusBadge status={item.status} />,
    },
    {
      key: 'actions',
      header: 'Actions',
      render: (item) => (
        <button
          onClick={() => setSelectedInquiry(item)}
          className="text-xs font-semibold text-neutral-900 hover:underline"
        >
          View Message
        </button>
      ),
    },
  ];

  return (
    <AdminLayout>
      <PageHeader
        title="Professional Inquiries"
        subtitle="Manage incoming project inquiries, casting calls, and booking submissions."
      />

      <FilterBar>
        <SearchBar value={search} onChange={setSearch} placeholder="Search by name or subject..." />
        <div className="flex items-center gap-3">
          <label className="text-xs text-neutral-500 font-sans">Filter Status:</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-1.5 bg-white border border-neutral-300 rounded-md text-xs font-sans text-neutral-800"
          >
            <option value="All">All Inquiries</option>
            <option value="New">New</option>
            <option value="Read">Read</option>
            <option value="Archived">Archived</option>
          </select>
        </div>
      </FilterBar>

      <DataTable columns={columns} data={filtered} keyExtractor={(item) => item.id} />

      {/* Detail Slide Panel / Modal */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/40 backdrop-blur-xs">
          <div className="bg-white rounded-lg border border-neutral-200 shadow-xl max-w-lg w-full p-6 space-y-4 font-sans">
            <div className="flex items-start justify-between border-b border-neutral-100 pb-3">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-neutral-600" />
                <h3 className="text-base font-semibold text-neutral-900">
                  {selectedInquiry.subject}
                </h3>
              </div>
              <button onClick={() => setSelectedInquiry(null)} className="text-neutral-400 hover:text-neutral-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs text-neutral-500 space-y-1">
              <p><strong className="text-neutral-800">From:</strong> {selectedInquiry.name} ({selectedInquiry.email})</p>
              <p><strong className="text-neutral-800">Date:</strong> {selectedInquiry.date}</p>
            </div>

            <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-md text-sm text-neutral-800 whitespace-pre-wrap leading-relaxed">
              {selectedInquiry.message}
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedInquiry(null)}
                className="px-4 py-2 text-xs font-medium text-neutral-700 bg-white border border-neutral-300 rounded-md hover:bg-neutral-50"
              >
                Close
              </button>
              <button
                onClick={() => {
                  alert('Archived inquiry [Mock Action]');
                  setSelectedInquiry(null);
                }}
                className="px-4 py-2 text-xs font-medium text-white bg-neutral-900 rounded-md hover:bg-neutral-800"
              >
                Mark as Archived
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
