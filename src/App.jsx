import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import ScrollToTop from '@/components/ScrollToTop';
import './rabe-adjustments.css';
import './compact-overrides.css';
import './mobile-hero-overrides.css';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
