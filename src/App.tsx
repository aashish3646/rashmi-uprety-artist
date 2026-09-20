import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/admin/ProtectedRoute';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { WorkPage } from './pages/WorkPage';
import { TheatrePage } from './pages/TheatrePage';
import { GalleryPage } from './pages/GalleryPage';
import { ShowreelPage } from './pages/ShowreelPage';
import { ContactPage } from './pages/ContactPage';

// Admin CMS Pages
import { AdminLoginPage } from './pages/admin/AdminLoginPage';
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
    <AuthProvider>
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

          {/* Admin Login Route */}
          <Route path="/admin/login" element={<AdminLoginPage />} />

          {/* Protected Admin Dashboard CMS Routes */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/content"
            element={
              <ProtectedRoute>
                <ContentListPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/content/home"
            element={
              <ProtectedRoute>
                <HomePageEditor />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/content/about"
            element={
              <ProtectedRoute>
                <AboutPageEditor />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/content/work"
            element={
              <ProtectedRoute>
                <ContentListPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/content/theatre"
            element={
              <ProtectedRoute>
                <ContentListPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/content/showreel"
            element={
              <ProtectedRoute>
                <ContentListPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/content/contact"
            element={
              <ProtectedRoute>
                <ContentListPage />
              </ProtectedRoute>
            }
          />

          {/* Project & Theatre Management */}
          <Route
            path="/admin/projects"
            element={
              <ProtectedRoute>
                <ProjectListPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/projects/new"
            element={
              <ProtectedRoute>
                <ProjectEditorPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/projects/:id"
            element={
              <ProtectedRoute>
                <ProjectEditorPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/theatre"
            element={
              <ProtectedRoute>
                <TheatreListPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/theatre/new"
            element={
              <ProtectedRoute>
                <TheatreEditorPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/theatre/:id"
            element={
              <ProtectedRoute>
                <TheatreEditorPage />
              </ProtectedRoute>
            }
          />

          {/* Media & Gallery */}
          <Route
            path="/admin/media"
            element={
              <ProtectedRoute>
                <MediaLibraryPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/media/photos"
            element={
              <ProtectedRoute>
                <MediaLibraryPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/media/videos"
            element={
              <ProtectedRoute>
                <MediaLibraryPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/gallery"
            element={
              <ProtectedRoute>
                <GalleryManagerPage />
              </ProtectedRoute>
            }
          />

          {/* Inquiries, Settings, & Account */}
          <Route
            path="/admin/inquiries"
            element={
              <ProtectedRoute>
                <InquiriesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/settings"
            element={
              <ProtectedRoute>
                <SiteSettingsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/account"
            element={
              <ProtectedRoute>
                <AccountPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
