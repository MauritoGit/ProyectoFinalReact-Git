import React from "react"

export default class Menu extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet"></link>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" ></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script>

      
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
              <div class="container-fluid">
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.linkedin.com/in/maurolozadafonseca/" target="_blank">Linkedin</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://github.com/MauroLoz" target="_blank">GitHub</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            
            </div>
        )
    }
}