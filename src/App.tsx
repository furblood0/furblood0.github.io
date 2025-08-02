// src/App.tsx
import { Routes, Route } from 'react-router-dom';

// İleride oluşturacağımız bileşen ve sayfa import'ları buraya gelecek:
import Navbar from './components/Navbar/Navbar'; // Örn: components/Navbar/Navbar.tsx
import HomePage from './pages/HomePage/HomePage'; // Örn: pages/HomePage/HomePage.tsx
import AboutPage from './pages/AboutPage/AboutPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import BlogPage from './pages/BlogPage/BlogPage';
import BlogPostDetail from './pages/BlogPostDetail/BlogPostDetail';
import ContactPage from './pages/ContactPage/ContactPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar /> {/* Navbar'ı buraya ekledik */}

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostDetail />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<h1>404 - Sayfa Bulunamadı</h1>} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;