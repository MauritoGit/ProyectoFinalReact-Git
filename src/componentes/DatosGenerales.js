import React from "react";
import Modulo from "./Modulo";
import { Link } from "react-router-dom";

export default class DatosGenerales extends React.Component {

    render() {
        return(
            <>
            <div class="row mt-5 pt-5">
                <div className="container p-5" style={{backgroundColor: "#E5E2E2", width: "100%"}}>
                    <div>
                        <h1 class="pt-4 pb-1 mx-2">Datos Generales</h1>
                        <Link to="/"  className="btn btn-success px-5 mx-2 mt-3 mb-5" style={{color: "white", textDecoration: "none"}}>Volver</Link>
                    </div>
                    <div class="row mt-3" style={{align: "center"}}>
                        <div class="col-4">
                            <Modulo titulo="Nombre completo" lugar="Mauro Lozada Fonseca"/>
                        </div>
                        <div class="col-4">
                            <Modulo titulo="Fecha de Nacimiento" lugar="10 de Febrero 1998"/>
                        </div>
                        <div class="col-4">
                            <Modulo titulo="Lugar de Nacimiento" lugar="Córdoba, Argentina"/>
                        </div>
                    </div>
                    <div class="row mt-3" style={{align: "center"}}>
                        <div class="col-4">
                            <Modulo titulo="Genero" lugar="Masculino"/>
                        </div>
                        <div class="col-4">
                            <Modulo titulo="Dirección" lugar="Aconquija 2137"/>
                        </div>
                        <div class="col-4">
                            <Modulo titulo="Permiso de conducir" lugar="B"/>
                        </div>
                    </div>
                </div>
            </div>

            </>

        )
    }

}
