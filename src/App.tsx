import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { ToastContainer } from "react-toastify";
import { ScrollToTop } from './components/ScrollToTop';
import { LoadingBar } from './components/LoadingBar';

export default function App() {
  return (
    <>
    <ToastContainer position="top-right" autoClose={2000}   />
    <Router>
      <ScrollToTop />
      <LoadingBar/>
      <div className="min-h-screen bg-[#0f172a] text-[#f8fafc]">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </>
  );
}
