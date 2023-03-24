import React from "react";
import Modulo from "./Modulo";
import './PiePagina.css';

export default class PiePagina extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nombre: '',
            mensaje: ''
        }

        this.submitted = this.submitted.bind(this);
        this.changedName = this.changedName.bind(this);
        this.changedMsg = this.changedMsg.bind(this);
    }

    submitted(event) {
        alert(this.state.nombre +"! El mensaje (" + this.state.mensaje + ") fue corretamente enviado");
        document.getElementById("miForm").reset();
    }

    changedName(event) {
        this.setState({
            nombre: event.target.value
        })
    }

    changedMsg(event) {
        this.setState({
            mensaje: event.target.value
        })
    }

    render() {
        return(
            <>
                    <div class="row bg-light p-4">
                        <div class="col-12 col-sm-6">
                            <div class="container">
                                <h2>Contacto</h2>
                                <p class="font-weight-bold">Datos de Contacto</p>
                                <p><i class="bi bi-envelope-at mr-2"></i>Email: maurolozadafonseca@gmail.com</p>
                                <p><i class="bi bi-telephone-plus mr-2"></i>Tel: 3513955585</p>
                                <p><i class="bi bi-instagram mr-2"></i>IG: maurolozada47</p>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6">
                            <div class="container">
                                    <form id="miForm" onSubmit={this.submitted}>
                                        <div class="form-group">
                                            <label>Nombre</label>
                                            <input type="text" class="form-control" placeholder="Ingresa tu Nombre" onChange={this.changedName}/>
                                        </div>
                                        <div class="form-group">
                                            <label>Mensaje</label>
                                            <textarea class="form-control" placeholder="Su mensaje..." onChange={this.changedMsg}></textarea>
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-danger mt-3">Enviar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                    </div>    
            </>
        )
    }

}