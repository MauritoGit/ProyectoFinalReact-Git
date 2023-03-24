import React from "react";
import Usuarios from "./Usuarios";
import { Link } from "react-router-dom";

export default class API extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount () {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then( (result) => {
            console.log(result)
            this.setState({
                users: result
            })
        })
    }


    render() {
        return(
            <>
            <div class="container pt-5">
                <div>
                    <h4 class="pt-4 pb-1 mx-2">Esta es un simple ejemplo para comprobar el funcionamiento de la API, dado que la pagina es una especia de CV, la API no tiene ninguna correspondencia con el resto de la pagina.</h4>
                    <Link to="/"  className="btn btn-success px-5 mx-2 mt-3 mb-5" style={{color: "white", textDecoration: "none"}}>Volver</Link>
                </div>
                {this.state.users.map((users) => (
                    <Usuarios id={users.id} name={users.name} email={users.email} phone={users.phone}/>
                ))}
            </div>

            </>
        )
    }
}