import { Link } from 'react-router-dom';
import { Briefcase, Image as ImageIcon, FileText, Inbox, ArrowUpRight } from 'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { PageHeader } from '../../components/admin/PageHeader';
import { StatCard } from '../../components/admin/StatCard';
import { StatusBadge } from '../../components/admin/StatusBadge';
import {
  MOCK_ADMIN_STATS,
  MOCK_PAGES,
  MOCK_RECENT_ACTIVITY,
} from '../../data/admin/mockAdminData';

export function DashboardPage() {
  return (
    <AdminLayout>
      <PageHeader
        title="Dashboard Overview"
        subtitle="Welcome back. Managing website content, media assets, and inquiries."
      />

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          title="Published Works"
          value={MOCK_ADMIN_STATS.publishedWorks}
          icon={Briefcase}
          description="Films & theatre productions"
        />
        <StatCard
          title="Media Assets"
          value={MOCK_ADMIN_STATS.mediaAssets}
          icon={ImageIcon}
          description="High-res photos & videos"
        />
        <StatCard
          title="Drafts"
          value={MOCK_ADMIN_STATS.drafts}
          icon={FileText}
          description="Unpublished changes"
        />
        <StatCard
          title="Inquiries"
          value={MOCK_ADMIN_STATS.inquiries}
          icon={Inbox}
          change="+2 new this week"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Content Status Section */}
        <div className="lg:col-span-8 bg-white border border-neutral-200 rounded-lg p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
            <div>
              <h2 className="text-base font-semibold text-neutral-900 font-sans">
                Website Content Status
              </h2>
              <p className="text-xs text-neutral-500 font-sans">
                Live status of main website routes
              </p>
            </div>
            <Link
              to="/admin/content"
              className="text-xs font-medium text-neutral-600 hover:text-neutral-900 flex items-center gap-1"
            >
              <span>Manage All</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-neutral-100">
            {MOCK_PAGES.map((page) => (
              <div key={page.id} className="py-3 flex items-center justify-between font-sans">
                <div>
                  <span className="text-sm font-medium text-neutral-800 block">
                    {page.title} Page
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">
                    {page.path}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-neutral-400 hidden sm:inline-block">
                    Updated {page.lastUpdated}
                  </span>
                  <StatusBadge status={page.status} />
                  <Link
                    to={`/admin/content/${page.title.toLowerCase()}`}
                    className="text-xs text-neutral-600 hover:text-neutral-900 underline"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="lg:col-span-4 bg-white border border-neutral-200 rounded-lg p-6 shadow-xs space-y-4">
          <div className="border-b border-neutral-100 pb-4">
            <h2 className="text-base font-semibold text-neutral-900 font-sans">
              Recent CMS Activity
            </h2>
            <p className="text-xs text-neutral-500 font-sans">
              Latest administrative changes
            </p>
          </div>

          <div className="space-y-4">
            {MOCK_RECENT_ACTIVITY.map((act) => (
              <div key={act.id} className="text-xs font-sans space-y-1">
                <p className="font-medium text-neutral-800">{act.text}</p>
                <div className="flex items-center gap-2 text-[11px] text-neutral-400">
                  <span>{act.time}</span>
                  <span>•</span>
                  <span>{act.user}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
