import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Community from './pages/Community';
import Documents from './pages/Documents';
import News from './pages/News';
import Contact from './pages/Contact';

// New Pages
import Organizacion from './pages/Nosotros/Organizacion';
import Directivos from './pages/Nosotros/Directivos';
import Docentes from './pages/Nosotros/Docentes';
import Pie from './pages/Nosotros/Pie';
import Convivencia from './pages/Comunidad/Convivencia';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* Nosotros Nested Routes */}
          <Route path="nosotros">
            <Route index element={<About />} />
            <Route path="organizacion" element={<Organizacion />} />
            <Route path="directivos" element={<Directivos />} />
            <Route path="docentes" element={<Docentes />} />
            <Route path="pie" element={<Pie />} />
          </Route>

          {/* Comunidad Nested Routes */}
          <Route path="comunidad">
            <Route index element={<Community />} />
            <Route path="convivencia" element={<Convivencia />} />
          </Route>

          <Route path="documentos" element={<Documents />} />
          <Route path="noticias" element={<News />} />
          <Route path="contacto" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
