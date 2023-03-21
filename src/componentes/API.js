import React from "react";
import Usuarios from "./Usuarios";

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
                {this.state.users.map((users) => (
                    <Usuarios id={users.id} name={users.name} email={users.email} phone={users.phone}/>
                ))}
            </div>

            </>
        )
    }
}