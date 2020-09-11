import React, { Component, Fragment } from 'react'

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <div className="jumbotron"> {/* Header de la page d'accueil */}
                    <h1 className="display-3">Lord of Frelia</h1>
                    <p className="lead">Un jeu de gestion qui vous propulse à l'époque médiaval </p>
                    <hr className="my-4"/>
                    <p>Faite évoluer votre royaume, et dominer le monde de Frélia</p>
                    <p className="lead">
                        <a className="btn btn-primary" href="/register" role="button">JOUER</a>
                    </p>
                </div>

                <div className="d-flex justify-content-center">{/* derniere nouveautées */}
                    <ul className="list-group w-50 mt-5">
                        <li className="list-group-item">Réduction des tarifs des plans</li>
                        <li className="list-group-item">Mise a jour de ...</li>
                        <li className="list-group-item justify-content-between">Cras justo odio</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>

                <div>{/* Screenshot du jeu */}
                    
                </div>
            </Fragment>
        )
    }
}
