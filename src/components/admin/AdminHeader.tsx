import { Menu, Bell, User } from 'lucide-react';

export interface AdminHeaderProps {
  onOpenMobileSidebar: () => void;
}

export function AdminHeader({ onOpenMobileSidebar }: AdminHeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-neutral-200 h-16 px-4 sm:px-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          onClick={onOpenMobileSidebar}
          className="lg:hidden p-2 text-neutral-600 hover:text-neutral-900 focus:outline-none"
          aria-label="Open sidebar menu"
        >
          <Menu className="w-5 h-5" />
        </button>
        <span className="text-xs font-medium text-neutral-500 font-sans hidden sm:inline-block">
          Official CMS Interface
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-800 px-2.5 py-1 rounded-full text-[11px] font-sans font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          <span>Mock Data Mode</span>
        </div>

        <button className="p-2 text-neutral-500 hover:text-neutral-800 transition-colors relative">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-500" />
        </button>

        <div className="h-6 w-px bg-neutral-200" />

        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-sans text-xs font-medium">
            <User className="w-4 h-4" />
          </div>
          <div className="hidden md:block font-sans text-xs text-left">
            <span className="block font-semibold text-neutral-800 leading-tight">Admin User</span>
            <span className="block text-neutral-400 text-[10px]">Administrator</span>
          </div>
        </div>
      </div>
    </header>
  );
}
