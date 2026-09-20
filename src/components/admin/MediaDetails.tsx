import { AdminMediaAsset } from '../../types/admin';
import { X, Trash2, ExternalLink } from 'lucide-react';

export interface MediaDetailsProps {
  asset: AdminMediaAsset | null;
  onClose: () => void;
}

export function MediaDetails({ asset, onClose }: MediaDetailsProps) {
  if (!asset) return null;

  return (
    <div className="bg-white border border-neutral-200 rounded-lg p-5 shadow-xs space-y-5">
      <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
        <h3 className="text-sm font-semibold text-neutral-900 font-sans">
          Media Details
        </h3>
        <button onClick={onClose} className="text-neutral-400 hover:text-neutral-600 p-1">
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="aspect-video bg-neutral-100 rounded-md overflow-hidden border border-neutral-200">
        <img src={asset.src} alt={asset.altText} className="w-full h-full object-contain" />
      </div>

      <div className="space-y-3 font-sans text-xs">
        <div>
          <span className="text-neutral-400 block uppercase tracking-wider text-[10px]">Filename</span>
          <span className="font-semibold text-neutral-800 break-all">{asset.filename}</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <span className="text-neutral-400 block uppercase tracking-wider text-[10px]">Dimensions</span>
            <span className="text-neutral-700">{asset.dimensions}</span>
          </div>
          <div>
            <span className="text-neutral-400 block uppercase tracking-wider text-[10px]">File Size</span>
            <span className="text-neutral-700">{asset.size}</span>
          </div>
        </div>

        <div>
          <span className="text-neutral-400 block uppercase tracking-wider text-[10px]">Alt Text</span>
          <input
            type="text"
            defaultValue={asset.altText}
            className="w-full mt-1 p-2 bg-neutral-50 border border-neutral-200 rounded text-neutral-800 focus:outline-none focus:border-neutral-900"
          />
        </div>

        <div>
          <span className="text-neutral-400 block uppercase tracking-wider text-[10px]">Category</span>
          <span className="text-neutral-700 font-medium">{asset.category}</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
        <a
          href={asset.src}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-xs text-neutral-600 hover:text-neutral-900 font-medium"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>View original</span>
        </a>

        <button className="inline-flex items-center gap-1 text-xs text-red-600 hover:text-red-700 font-medium">
          <Trash2 className="w-3.5 h-3.5" />
          <span>Remove</span>
        </button>
      </div>
    </div>
  );
}
