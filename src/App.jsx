import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      {/* Ambient background blobs */}
      <div className="ambient">
        <div className="ambient-blob ambient-blob-1" />
        <div className="ambient-blob ambient-blob-2" />
      </div>

      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
