import { useState } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { PageHeader } from '../../components/admin/PageHeader';
import { FilterBar } from '../../components/admin/FilterBar';
import { MOCK_MEDIA_ASSETS } from '../../data/admin/mockAdminData';
import { Save, GripVertical, Eye, Trash2 } from 'lucide-react';

export function GalleryManagerPage() {
  const [activeCategory, setActiveCategory] = useState<'Portraits' | 'Theatre' | 'Editorial' | 'Film' | 'Behind the Scenes'>('Portraits');
  const [items, setItems] = useState(MOCK_MEDIA_ASSETS);

  const categoryItems = items.filter((i) => i.category === activeCategory);

  return (
    <AdminLayout>
      <PageHeader
        title="Gallery Manager"
        subtitle="Organize photo ordering, public visibility, and portfolio gallery categories."
        actions={
          <button
            onClick={() => alert('Saved gallery layout [Mock Save]')}
            className="px-4 py-2 text-xs font-medium text-white bg-neutral-900 rounded-md hover:bg-neutral-800 flex items-center gap-2"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Save Gallery Order</span>
          </button>
        }
      />

      {/* Category Tabs */}
      <FilterBar>
        <div className="flex items-center gap-2 overflow-x-auto w-full pb-1 sm:pb-0">
          {(['Portraits', 'Theatre', 'Editorial', 'Film', 'Behind the Scenes'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-md text-xs font-medium font-sans whitespace-nowrap transition-colors ${
                activeCategory === cat
                  ? 'bg-neutral-900 text-white'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </FilterBar>

      <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
          <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
            Category: {activeCategory} ({categoryItems.length} Images)
          </span>
          <span className="text-xs text-neutral-400">Drag handle to reorder images</span>
        </div>

        {categoryItems.length === 0 ? (
          <div className="p-8 text-center text-xs text-neutral-400">
            No images currently assigned to {activeCategory} category.
          </div>
        ) : (
          <div className="space-y-3">
            {categoryItems.map((asset, index) => (
              <div
                key={asset.id}
                className="flex items-center justify-between p-3 bg-neutral-50 border border-neutral-200 rounded-md hover:border-neutral-300 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="cursor-grab text-neutral-400 hover:text-neutral-600">
                    <GripVertical className="w-4 h-4" />
                  </span>
                  <span className="text-xs font-mono text-neutral-400">0{index + 1}</span>
                  <div className="w-12 h-12 bg-neutral-200 rounded overflow-hidden border border-neutral-300">
                    <img src={asset.src} alt={asset.altText} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-neutral-900 block">{asset.filename}</span>
                    <span className="text-[11px] text-neutral-400">{asset.dimensions}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button className="text-xs text-neutral-600 hover:text-neutral-900 p-1 flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Visible</span>
                  </button>
                  <button
                    onClick={() => setItems(items.filter((i) => i.id !== asset.id))}
                    className="text-neutral-400 hover:text-red-600 p-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
