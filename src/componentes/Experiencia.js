import React from "react";
import Modulo from "./Modulo";
import { Link } from "react-router-dom";

export default class Experiencia extends React.Component {


    render() {

        const descipcionv1 = <p>Reparación, Mantenimiento y actualización de equipos<br/>
                                Soporte a sistemas informáticos del hospital (GeClisa, GeCros, Ixoros, etc)<br/>
                                Gestión de usuarios y de Active Directory<br/>
                                Mantenimiento y soporte de redes y servidores</p>  

        const descipcionv2 = <p>Seguimiento Trazabilidad de produccion <br/>
                                Gestion de inventario<br/>
                                Desarrollo Mobile en JavaScript<br/>
                                Desarrollo Aplicacion de escritorio en C#</p>

        return(
            <>
            <div class="row mt-5 pt-5">
                <div className="container p-5" style={{backgroundColor: "#E5E2E2", width: "100%"}}>
                    <div>
                        <h1 class="pt-4 pb-1 mx-2">Experiencia</h1>
                        <button class="btn btn-success px-5 mx-2 mt-3 mb-5"><Link to="/" style={{color: "white", textDecoration: "none"}}>Volver</Link></button>
                    </div>
                    <Modulo titulo="Soporte Tecnico Informatico - 2021 - 2022" lugar="Hospital Italiano de Córdoba, Córdoba" descripcion={descipcionv1}/>
                    <br/>
                    <Modulo titulo="Logistica - Programador - 2022 - Actualidad" lugar="SOGEFI Group, Cordoba" descripcion={descipcionv2}/>
                </div>
            </div>
            </>

        )
    }

}