import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { WorkPage } from './pages/WorkPage';
import { TheatrePage } from './pages/TheatrePage';
import { GalleryPage } from './pages/GalleryPage';
import { ShowreelPage } from './pages/ShowreelPage';
import { ContactPage } from './pages/ContactPage';

// Admin CMS Pages
import { DashboardPage } from './pages/admin/DashboardPage';
import { ContentListPage } from './pages/admin/ContentListPage';
import { HomePageEditor } from './pages/admin/HomePageEditor';
import { AboutPageEditor } from './pages/admin/AboutPageEditor';
import { ProjectListPage } from './pages/admin/ProjectListPage';
import { ProjectEditorPage } from './pages/admin/ProjectEditorPage';
import { TheatreListPage } from './pages/admin/TheatreListPage';
import { TheatreEditorPage } from './pages/admin/TheatreEditorPage';
import { MediaLibraryPage } from './pages/admin/MediaLibraryPage';
import { GalleryManagerPage } from './pages/admin/GalleryManagerPage';
import { InquiriesPage } from './pages/admin/InquiriesPage';
import { SiteSettingsPage } from './pages/admin/SiteSettingsPage';
import { AccountPage } from './pages/admin/AccountPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Website Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/theatre" element={<TheatrePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/showreel" element={<ShowreelPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Admin Dashboard CMS Routes */}
        <Route path="/admin" element={<DashboardPage />} />
        <Route path="/admin/content" element={<ContentListPage />} />
        <Route path="/admin/content/home" element={<HomePageEditor />} />
        <Route path="/admin/content/about" element={<AboutPageEditor />} />
        <Route path="/admin/content/work" element={<ContentListPage />} />
        <Route path="/admin/content/theatre" element={<ContentListPage />} />
        <Route path="/admin/content/showreel" element={<ContentListPage />} />
        <Route path="/admin/content/contact" element={<ContentListPage />} />

        {/* Project & Theatre Management */}
        <Route path="/admin/projects" element={<ProjectListPage />} />
        <Route path="/admin/projects/new" element={<ProjectEditorPage />} />
        <Route path="/admin/projects/:id" element={<ProjectEditorPage />} />

        <Route path="/admin/theatre" element={<TheatreListPage />} />
        <Route path="/admin/theatre/new" element={<TheatreEditorPage />} />
        <Route path="/admin/theatre/:id" element={<TheatreEditorPage />} />

        {/* Media & Gallery */}
        <Route path="/admin/media" element={<MediaLibraryPage />} />
        <Route path="/admin/media/photos" element={<MediaLibraryPage />} />
        <Route path="/admin/media/videos" element={<MediaLibraryPage />} />
        <Route path="/admin/gallery" element={<GalleryManagerPage />} />

        {/* Inquiries, Settings, & Account */}
        <Route path="/admin/inquiries" element={<InquiriesPage />} />
        <Route path="/admin/settings" element={<SiteSettingsPage />} />
        <Route path="/admin/account" element={<AccountPage />} />
      </Routes>
    </BrowserRouter>
  );
}
