import { ReactNode } from 'react';

export interface Column<T> {
  key: string;
  header: string;
  render?: (item: T) => ReactNode;
  className?: string;
}

export interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  keyExtractor: (item: T) => string;
  emptyTitle?: string;
  emptyDescription?: string;
}

export function DataTable<T>({
  columns,
  data,
  keyExtractor,
  emptyTitle = 'No records found',
  emptyDescription = 'There are currently no items to display.',
}: DataTableProps<T>) {
  if (data.length === 0) {
    return (
      <div className="bg-white border border-neutral-200 rounded-lg p-8 text-center text-sm text-neutral-500 font-sans">
        <p className="font-semibold text-neutral-800">{emptyTitle}</p>
        <p className="text-xs text-neutral-400 mt-1">{emptyDescription}</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-xs">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm font-sans">
          <thead className="bg-neutral-50 border-b border-neutral-200 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
            <tr>
              {columns.map((col) => (
                <th key={col.key} className={`px-5 py-3.5 ${col.className || ''}`}>
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200 text-neutral-800">
            {data.map((item) => (
              <tr key={keyExtractor(item)} className="hover:bg-neutral-50/60 transition-colors">
                {columns.map((col) => (
                  <td key={col.key} className={`px-5 py-4 ${col.className || ''}`}>
                    {col.render ? col.render(item) : (item as any)[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
