import React from "react";

export default class Usuarios extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <>
            <div class="container my-5">
                <h3>Id usuario: {this.props.id} - Nombre y Apellido: {this.props.name}</h3>  
                <p>Email: {this.props.email}</p>
                <small>Telefono: {this.props.phone}</small>
            </div>
            </>
        )
    }
}