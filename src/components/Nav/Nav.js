import '../../App.css';
import React, { Component } from "react";

class Nav extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark black">
                    <div className="container">
                        <a className="navbar-brand" href="#!"><strong>Patience Deaton</strong></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">

                                <li className="nav-item active">
                                    <a className="nav-link" href="#!">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!">Skills</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        Projects
                                     </a>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                        <a className="dropdown-item" href="#!">Learn Sativa </a>
                                        <a className="dropdown-item" href="#!">Chronic Guru</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;