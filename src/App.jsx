import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Playground from './pages/Playground';
import Connect from './pages/Connect';
import BetterKitchen from './pages/BetterKitchen';
import InfinityKeys from './pages/InfinityKeys';
import PoemGenerator from './pages/PoemGenerator';
import './App.css';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/work/better-kitchen" element={<BetterKitchen />} />
        <Route path="/work/infinity-keys" element={<InfinityKeys />} />
        <Route path="/work/poem-generator" element={<PoemGenerator />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;