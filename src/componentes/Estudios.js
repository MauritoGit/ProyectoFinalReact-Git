import React from "react";
import Modulo from "./Modulo";
import { Link } from "react-router-dom";

export default class Estudios extends React.Component {

    render() {
        return(
            <>
            <div class="row mt-5 pt-5">
                <div className="container p-5" style={{backgroundColor: "#E5E2E2", width: "100%"}}>
                    <div>
                        <h1 class="pt-4 pb-1 mx-2">Estudios</h1>
                        <button class="btn btn-success px-5 mx-2 mt-3 mb-5"><Link to="/" style={{color: "white", textDecoration: "none"}}>Volver</Link></button>
                    </div>
                    <Modulo titulo="Bachiller en Ciencias Sociales y Humanidades - dic 2015" lugar="Colegio Santo Tomás de Aquino, Córdoba, Argentina"/>
                    <br/>
                    <Modulo titulo="Ingeniería en Sistemas de información - mar 2016 - Actualidad" lugar="Universidad Tecnológica Nacional (UTN), Cordoba"/>
                </div>
            </div>
            </>
        )
    }

}