import React from "react";
import Modulo from "./Modulo";
import { Link } from "react-router-dom";

export default class Curso extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class="row mt-5 pt-5">
                <div className="container p-5" style={{backgroundColor: "#E5E2E2", width: "100%"}}>
                    <div>
                        <h1 class="pt-4 pb-1 mx-2">Cursos</h1>
                        <button class="btn btn-success px-5 mx-2 mt-3 mb-5"><Link to="/" style={{color: "white", textDecoration: "none"}}>Volver</Link></button>
                    </div>
                    <Modulo titulo="Aprende React + Firebase | 2021 Actualizado - ago 2021 - ago 2021" lugar="Udemy" descripcion=""/>
                    <Modulo titulo="Como crear una página web moderna con Bootstrap 5 - sep 2021 - sep 2021" lugar="Udemy" descripcion=""/>
                    <Modulo titulo="Aprende PHP desde cero - feb 2022 - feb 2022" lugar="Udemy" descripcion=""/>
                    <Modulo titulo="Dominando Laravel - De principiante a experto - mar 2022 - Actualidad" lugar="Udemy" descripcion=""/>
                    <Modulo titulo="Programador Full-Stack - ene 2023 - Actualidad" lugar="Lumetrio" descripcion=""/>
                </div>
            </div>
        )
    }
}