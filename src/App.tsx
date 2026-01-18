import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Philosophy from './pages/Philosophy';
import InsightsPage from './pages/InsightsPage';
import About from './pages/About';
import Contact from './pages/Contact';
import ArticleStructureOverSpeculation from './pages/ArticleStructureOverSpeculation';
import ArticleGovernanceAndClarity from './pages/ArticleGovernanceAndClarity';
import ArticleLetterJanuary2024 from './pages/ArticleLetterJanuary2024';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/insights/structure-over-speculation" element={<ArticleStructureOverSpeculation />} />
        <Route path="/insights/governance-and-clarity" element={<ArticleGovernanceAndClarity />} />
        <Route path="/insights/letter-january-2024" element={<ArticleLetterJanuary2024 />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

