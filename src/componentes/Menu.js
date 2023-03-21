import React from "react"

export default class Menu extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <a className="navbar-brand" href="#"><i class="bi bi-person-circle"></i></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="https://www.linkedin.com/in/maurolozadafonseca/" target="_blank">Linkedin</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://github.com/MauroLoz" target="_blank">GitHub</a>
                </li>
              </ul>
            </div>
            </nav>
            </div>
        )
    }
}