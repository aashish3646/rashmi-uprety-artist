import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  LayoutDashboard,
  FileText,
  Home,
  User,
  Briefcase,
  Theater,
  Film,
  Mail,
  FolderKanban,
  Image as ImageIcon,
  Grid,
  Inbox,
  Settings,
  UserCheck,
  ExternalLink,
  LogOut,
  X,
} from 'lucide-react';

export interface AdminSidebarProps {
  isOpen: boolean;
  onCloseMobile: () => void;
}

export function AdminSidebar({ isOpen, onCloseMobile }: AdminSidebarProps) {
  const location = useLocation();
  const { logout } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  const navSections = [
    {
      group: 'MAIN',
      items: [
        { label: 'Dashboard', path: '/admin', icon: LayoutDashboard },
      ],
    },
    {
      group: 'CONTENT',
      items: [
        { label: 'Pages Overview', path: '/admin/content', icon: FileText },
        { label: 'Home Page', path: '/admin/content/home', icon: Home },
        { label: 'About Page', path: '/admin/content/about', icon: User },
        { label: 'Work Page', path: '/admin/content/work', icon: Briefcase },
        { label: 'Theatre Page', path: '/admin/content/theatre', icon: Theater },
        { label: 'Showreel Page', path: '/admin/content/showreel', icon: Film },
        { label: 'Contact Page', path: '/admin/content/contact', icon: Mail },
      ],
    },
    {
      group: 'CONTENT MANAGEMENT',
      items: [
        { label: 'Projects', path: '/admin/projects', icon: FolderKanban },
        { label: 'Theatre Productions', path: '/admin/theatre', icon: Theater },
      ],
    },
    {
      group: 'MEDIA',
      items: [
        { label: 'Media Library', path: '/admin/media', icon: ImageIcon },
        { label: 'Gallery Manager', path: '/admin/gallery', icon: Grid },
      ],
    },
    {
      group: 'INQUIRIES',
      items: [
        { label: 'Inquiries', path: '/admin/inquiries', icon: Inbox },
      ],
    },
    {
      group: 'SETTINGS',
      items: [
        { label: 'Site Settings', path: '/admin/settings', icon: Settings },
        { label: 'Account', path: '/admin/account', icon: UserCheck },
      ],
    },
  ];

  return (
    <>
      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-neutral-900/40 backdrop-blur-xs lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar Navigation */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-neutral-900 text-neutral-200 border-r border-neutral-800 flex flex-col justify-between transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header / Brand */}
        <div>
          <div className="flex items-center justify-between p-5 border-b border-neutral-800">
            <Link to="/admin" onClick={onCloseMobile} className="block">
              <span className="font-serif text-lg tracking-wider text-white font-medium">
                RASHMI UPRETY
              </span>
              <span className="block font-sans text-[10px] tracking-[0.25em] text-neutral-400 uppercase">
                ADMIN CMS
              </span>
            </Link>
            <button
              onClick={onCloseMobile}
              className="lg:hidden text-neutral-400 hover:text-white p-1"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav List */}
          <nav className="p-4 space-y-6 overflow-y-auto max-h-[calc(100vh-140px)]">
            {navSections.map((sec) => (
              <div key={sec.group} className="space-y-1">
                <span className="px-3 text-[10px] font-semibold text-neutral-400 uppercase tracking-widest block mb-2 font-sans">
                  {sec.group}
                </span>
                {sec.items.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.path);
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={onCloseMobile}
                      className={`flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium font-sans transition-colors ${
                        active
                          ? 'bg-neutral-800 text-white font-semibold'
                          : 'text-neutral-400 hover:bg-neutral-800/60 hover:text-neutral-200'
                      }`}
                    >
                      <Icon className="w-4 h-4 text-neutral-400" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            ))}
          </nav>
        </div>

        {/* Footer actions */}
        <div className="p-4 border-t border-neutral-800 space-y-1 font-sans text-xs">
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3 py-2 text-neutral-400 hover:text-white transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>View Website</span>
          </a>
          <button
            onClick={() => {
              logout();
            }}
            className="w-full flex items-center gap-2 px-3 py-2 text-neutral-400 hover:text-red-400 transition-colors text-left cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  );
}
