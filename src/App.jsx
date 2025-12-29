import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Community from './pages/Community';
import Documents from './pages/Documents';
import News from './pages/News';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="nosotros" element={<About />} />
          <Route path="comunidad" element={<Community />} />
          <Route path="documentos" element={<Documents />} />
          <Route path="noticias" element={<News />} />
          <Route path="contacto" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
