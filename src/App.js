import './App.css';
import Menu from "./componentes/Menu"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle'

import { Routes, Route, BrowserRouter } from "react-router-dom"

import Experiencia from './componentes/Experiencia';
import Estudios from './componentes/Estudios';
import Curso from './componentes/Curso';
import Inicio from './componentes/Inicio';
import DatosGenerales from './componentes/DatosGenerales';
import PiePagina from './componentes/PiePagina';
import API from './componentes/API';

function App() {
  return (
      <div>

          <BrowserRouter>
          <Menu/>          
            <Routes>
              <Route path="/" element={<Inicio/>} />
              <Route path="/cursos" element={<Curso/>} />
              <Route path="/experiencia" element={<Experiencia/>} />
              <Route path="/estudios" element={<Estudios/>} />
              <Route path="/datos" element={<DatosGenerales/>} />
              <Route path="/apitest" element={<API/>} />
            </Routes>       
          </BrowserRouter>

          <footer class="mt-5">
          <PiePagina/>
          </footer>
      </div>
  );
}

export default App;
