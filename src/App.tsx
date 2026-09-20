import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { WorkPage } from './pages/WorkPage';
import { TheatrePage } from './pages/TheatrePage';
import { GalleryPage } from './pages/GalleryPage';
import { ShowreelPage } from './pages/ShowreelPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/theatre" element={<TheatrePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/showreel" element={<ShowreelPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
