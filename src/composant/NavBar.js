import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

export default class NavBar extends Component {

    state={
        
    }

    logout=()=>{
        alert("deco");
    }

    render() {
        return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
            <ul className="navbar-nav mr-auto mt-2 mt-md-0">
                <li className="nav-item"><Link className="nav-link" to="/">Accueil</Link></li>
                    <li className="nav-item"><button onClick={this.logout} className="btn-link">Deconnection</button></li>
                    <li className="nav-item"><Link className="nav-link" to="/portail">Portail</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/login">Connection</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/register">Inscription</Link></li>
            </ul>
        </nav>
            )
    }
}
