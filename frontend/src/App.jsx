// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import HistoriaPage from './pages/HistoriaPage';
import MemoriasPage from './pages/MemoriasPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/historia" element={<HistoriaPage />} />
          <Route path="/memorias" element={<MemoriasPage />} />
        </Routes>
      </main>
        <Footer />
    </>
  );
}
export default App;