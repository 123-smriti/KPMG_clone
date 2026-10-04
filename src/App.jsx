import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import ServicesPage from './pages/Services/ServicesPage.jsx';
import CareersPage from './pages/Careers/CareersPage.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';

// App only maps URLs to pages. Page content lives in /pages.
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
