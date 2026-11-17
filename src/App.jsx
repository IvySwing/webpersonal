import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Playground from './pages/Playground';
import Connect from './pages/Connect';
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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;