import { AdminMediaAsset } from '../../types/admin';
import { MediaCard } from './MediaCard';

export interface MediaGridProps {
  assets: AdminMediaAsset[];
  selectedId?: string;
  onSelectAsset?: (asset: AdminMediaAsset) => void;
}

export function MediaGrid({ assets, selectedId, onSelectAsset }: MediaGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {assets.map((asset) => (
        <MediaCard
          key={asset.id}
          asset={asset}
          isSelected={asset.id === selectedId}
          onSelect={onSelectAsset}
        />
      ))}
    </div>
  );
}
