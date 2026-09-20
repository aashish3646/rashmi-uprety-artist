import { AdminMediaAsset } from '../../types/admin';
import { Image as ImageIcon, Video, CheckCircle } from 'lucide-react';

export interface MediaCardProps {
  asset: AdminMediaAsset;
  isSelected?: boolean;
  onSelect?: (asset: AdminMediaAsset) => void;
}

export function MediaCard({ asset, isSelected = false, onSelect }: MediaCardProps) {
  return (
    <div
      onClick={() => onSelect && onSelect(asset)}
      className={`group relative bg-white border rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ${
        isSelected
          ? 'border-neutral-900 ring-2 ring-neutral-900 shadow-md'
          : 'border-neutral-200 hover:border-neutral-400 shadow-xs'
      }`}
    >
      <div className="aspect-square bg-neutral-100 overflow-hidden relative">
        <img
          src={asset.src}
          alt={asset.altText}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 flex items-center gap-1">
          {asset.type === 'video' ? (
            <span className="bg-neutral-900/80 text-white p-1 rounded-md text-[10px]">
              <Video className="w-3.5 h-3.5" />
            </span>
          ) : (
            <span className="bg-neutral-900/80 text-white p-1 rounded-md text-[10px]">
              <ImageIcon className="w-3.5 h-3.5" />
            </span>
          )}
          {isSelected && <CheckCircle className="w-4 h-4 text-emerald-500 fill-white" />}
        </div>
      </div>

      <div className="p-3 space-y-1">
        <p className="text-xs font-semibold text-neutral-800 font-sans truncate">
          {asset.filename}
        </p>
        <div className="flex items-center justify-between text-[11px] text-neutral-400 font-sans">
          <span>{asset.category}</span>
          <span>{asset.size}</span>
        </div>
      </div>
    </div>
  );
}
