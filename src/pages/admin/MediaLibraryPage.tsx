import { useState } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { PageHeader } from '../../components/admin/PageHeader';
import { FilterBar } from '../../components/admin/FilterBar';
import { SearchBar } from '../../components/admin/SearchBar';
import { MediaGrid } from '../../components/admin/MediaGrid';
import { MediaDetails } from '../../components/admin/MediaDetails';
import { MOCK_MEDIA_ASSETS } from '../../data/admin/mockAdminData';
import { AdminMediaAsset } from '../../types/admin';
import { Upload } from 'lucide-react';

export function MediaLibraryPage() {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [selectedAsset, setSelectedAsset] = useState<AdminMediaAsset | null>(MOCK_MEDIA_ASSETS[0]);

  const filteredAssets = MOCK_MEDIA_ASSETS.filter((asset) => {
    const matchesSearch = asset.filename.toLowerCase().includes(search.toLowerCase()) || asset.altText.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || asset.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <AdminLayout>
      <PageHeader
        title="Media Library"
        subtitle="Manage original high-resolution photography assets, video previews, and image metadata."
        actions={
          <button
            onClick={() => alert('Upload File Dialog [Mock Upload]')}
            className="px-4 py-2 text-xs font-medium text-white bg-neutral-900 rounded-md hover:bg-neutral-800 flex items-center gap-2"
          >
            <Upload className="w-4 h-4" />
            <span>Upload Media</span>
          </button>
        }
      />

      <FilterBar>
        <SearchBar value={search} onChange={setSearch} placeholder="Search media by filename or alt text..." />
        <div className="flex items-center gap-3">
          <label className="text-xs text-neutral-500 font-sans">Category:</label>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-3 py-1.5 bg-white border border-neutral-300 rounded-md text-xs font-sans text-neutral-800 capitalize"
          >
            <option value="All">All Categories</option>
            <option value="portrait">Portraits</option>
            <option value="editorial">Editorial</option>
            <option value="theatre">Theatre</option>
            <option value="work">Work / Film</option>
            <option value="showreel">Showreel</option>
            <option value="behind-the-scenes">Behind the Scenes</option>
          </select>
        </div>
      </FilterBar>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8">
          <MediaGrid
            assets={filteredAssets}
            selectedId={selectedAsset?.id}
            onSelectAsset={(asset) => setSelectedAsset(asset)}
          />
        </div>

        <div className="lg:col-span-4 sticky top-24">
          <MediaDetails asset={selectedAsset} onClose={() => setSelectedAsset(null)} />
        </div>
      </div>
    </AdminLayout>
  );
}
