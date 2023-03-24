import React from "react";
import foto from '../img/mifoto.jpg';
import { Link } from "react-router-dom";
import './Inicio.css';


export default class Inicio extends React.Component {

    render() {
        return(
            <>
            <div class="row py-5 mt-5" id="conPrin">
                <div class="row">
                    <div class="col-12 col-md-4 d-flex justify-content-center justify-content-md-end align-items-md-center" id="imagen">
                    <img src={foto} width="200"></img>
                    </div>
                  <div class="col-12 col-md-6 justify-content-end" id="hola">
                    <h1><b>Mauro Lozada</b></h1>
                    <p id="id1">Estudiante de ingeniería en sistemas con muchas ganas y predisposición en seguir formándome en el
                      ámbito laboral, continuar plasmando los conocimientos y habilidades adquiridas en la carrera, enriquecer
                      los mismos, y sobre todo aprender de la nuevas experiencias. También poder desplegar mis aptitudes
                      como responsabilidad, puntualidad e iniciativa entre otras. Y por último lograr superarme brindando lo
                      mejor de mí, tanto en lo laboral, como en lo personal.
                    </p>
                  </div>
                  <div class="col-2">
                  </div>
              </div>
            </div>
            <div class="d-flex container mt-5" id="row1">
              <div class="text-align-center pt-5" id="contenedor">
                <h3>Datos Pesonales</h3>
                <Link to="/datos" className="mx-3 btn btn-dark" style={{color: "white", textDecoration: "none"}}>Ver</Link>
              </div>
              <div class="text-align-center pt-5" id="contenedor">
                <h3>Estudios</h3>
                <Link to="/estudios" className="mx-3 btn btn-dark" style={{color: "white", textDecoration: "none"}}>Ver</Link>
              </div>
              <div class="text-align-center pt-5" id="contenedor">
                <h3>Experiencia</h3>
                <Link to="/experiencia" className="mx-3 btn btn-dark" style={{color: "white", textDecoration: "none"}}>Ver</Link>
              </div>
            </div>
            <div class="d-flex container mt-1 mt-sm-5" id="row2">
              <div class="text-align-center pt-5" id="contenedor">
                <h3>Cursos</h3>
                <Link to="/cursos" className="mx-3 btn btn-dark" style={{color: "white", textDecoration: "none"}}>Ver</Link>
              </div>
              <div class="text-align-center pt-5" id="contenedor">
                <h3>Prueba API</h3>
                <Link to="/apitest" className="mx-3 btn btn-dark" style={{color: "white", textDecoration: "none"}}>Ver</Link>
              </div>
            </div>
            </>

        )
    }

}