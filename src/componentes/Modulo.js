import React from "react";

export default class Modulo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h4>{this.props.titulo}</h4>
                <p>{this.props.lugar}</p>
                <small>{this.props.descripcion}</small>
            </div>
        )
    }
}