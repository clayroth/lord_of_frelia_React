import React, { Component } from 'react'

export default class Inventaire extends Component {

    state ={
        Structures:null,
        isLoading:false,
        inventaireJoueur:null,
    }

    componentDidMount()
    {
        const data = this.props;

        this.setState({Structures:data.struc,inventaireJoueur:data.inv})
        this.setState({isLoading:true})
        console.log(data.struc);
    }

    render() {

        if(this.state.isLoading)
        {
            const structures = this.state.Structures;
            const inventaireJoueur = this.state.inventaireJoueur;
            return (
                <>
                    <div className="card-columns">
                        <div class="card"> {/* Ferme */}
                            <img class="card-img-top" src="/images/pathToYourImage.png" alt="Card image cap"/>
                            <div class="card-body">
                            <h4 class="card-title"> Ferme </h4>
                            <h6 class="card-title"> {structures.ferme ===0?'pas construite':"lvl :" +structures.ferme} </h6>
                            <p class="card-text">
                                Some quick example text to build on the card title
                                and make up the bulk of the card's content.
                            </p>
                            <ul>
                                <li>bois : {inventaireJoueur.bois} / 20</li>
                                <li>nourriture : {inventaireJoueur.nourriture} / 15</li>
                            </ul>
                            <a href="#!" class="btn btn-primary">{structures.ferme ===0?'Construire':"Améliorer"}</a>
                            </div>
                        </div>
                        <div class="card"> {/* scierie */}
                            <img class="card-img-top" src="/images/pathToYourImage.png" alt="Card image cap"/>
                            <div class="card-body">
                            <h4 class="card-title"> scierie </h4>
                            <h6 class="card-title"> {structures.scierie ===0?'pas construite':"lvl :" +structures.scierie} </h6>
                            <p class="card-text">
                                Some quick example text to build on the card title
                                and make up the bulk of the card's content.
                            </p>
                            <ul>
                                <li>bois : {inventaireJoueur.bois} / 20</li>
                                <li>nourriture : {inventaireJoueur.nourriture} / 15</li>
                            </ul>
                            <a href="#!" class="btn btn-primary">{structures.ferme ===0?'Construire':"Améliorer"}</a>
                            </div>
                        </div>
                        <div class="card"> {/* caserne */}
                            <img class="card-img-top" src="/images/pathToYourImage.png" alt="Card image cap"/>
                            <div class="card-body">
                            <h4 class="card-title"> caserne </h4>
                            <h6 class="card-title"> {structures.caserne ===0?'pas construite':"lvl :" +structures.caserne} </h6>
                            <p class="card-text">
                                Some quick example text to build on the card title
                                and make up the bulk of the card's content.
                            </p>
                            <ul>
                                <li>bois : {inventaireJoueur.bois} / 20</li>
                                <li>nourriture : {inventaireJoueur.nourriture} / 15</li>
                            </ul>
                            <a href="#!" class="btn btn-primary">{structures.caserne ===0?'Construire':"Améliorer"}</a>
                            </div>
                        </div>
                        <div class="card"> {/* menuiserie */}
                            <img class="card-img-top" src="/images/pathToYourImage.png" alt="Card image cap"/>
                            <div class="card-body">
                            <h4 class="card-title"> menuiserie </h4>
                            <h6 class="card-title"> {structures.menuiserie ===0?'pas construite':"lvl :" +structures.menuiserie} </h6>
                            <p class="card-text">
                                Some quick example text to build on the card title
                                and make up the bulk of the card's content.
                            </p>
                            <ul>
                                <li>bois : {inventaireJoueur.bois} / 20</li>
                                <li>nourriture : {inventaireJoueur.nourriture} / 15</li>
                            </ul>
                            <a href="#!" class="btn btn-primary">{structures.menuiserie ===0?'Construire':"Améliorer"}</a>
                            </div>
                        </div>
                        <div class="card"> {/* armurerie */}
                            <img class="card-img-top" src="/images/pathToYourImage.png" alt="Card image cap"/>
                            <div class="card-body">
                            <h4 class="card-title"> armurerie </h4>
                            <h6 class="card-title"> {structures.armurerie ===0?'pas construite':"lvl :" +structures.armurerie} </h6>
                            <p class="card-text">
                                Some quick example text to build on the card title
                                and make up the bulk of the card's content.
                            </p>
                            <ul>
                                <li>bois : {inventaireJoueur.bois} / 20</li>
                                <li>nourriture : {inventaireJoueur.nourriture} / 15</li>
                            </ul>
                            <a href="#!" class="btn btn-primary">{structures.armurerie ===0?'Construire':"Améliorer"}</a>
                            </div>
                        </div>
                        <div class="card"> {/* chateau */}
                            <img class="card-img-top" src="/images/pathToYourImage.png" alt="Card image cap"/>
                            <div class="card-body">
                            <h4 class="card-title"> chateau </h4>
                            <h6 class="card-title"> {structures.chateau ===0?'pas construite':"lvl :" +structures.chateau} </h6>
                            <p class="card-text">
                                Some quick example text to build on the card title
                                and make up the bulk of the card's content.
                            </p>
                            <ul>
                                <li>bois : {inventaireJoueur.bois} / 20</li>
                                <li>nourriture : {inventaireJoueur.nourriture} / 15</li>
                            </ul>
                            <a href="#!" class="btn btn-primary">{structures.chateau ===0?'Construire':"Améliorer"}</a>
                            </div>
                        </div>
                        <div class="card"> {/* ecurie */}
                            <img class="card-img-top" src="/images/pathToYourImage.png" alt="Card image cap"/>
                            <div class="card-body">
                            <h4 class="card-title"> ecurie </h4>
                            <h6 class="card-title"> {structures.ecurie ===0?'pas construite':"lvl :" +structures.ecurie} </h6>
                            <p class="card-text">
                                Some quick example text to build on the card title
                                and make up the bulk of the card's content.
                            </p>
                            <ul>
                                <li>bois : {inventaireJoueur.bois} / 20</li>
                                <li>nourriture : {inventaireJoueur.nourriture} / 15</li>
                            </ul>
                            <a href="#!" class="btn btn-primary">{structures.ecurie ===0?'Construire':"Améliorer"}</a>
                            </div>
                        </div>
                        <div class="card"> {/* forge */}
                            <img class="card-img-top" src="/images/pathToYourImage.png" alt="Card image cap"/>
                            <div class="card-body">
                            <h4 class="card-title"> forge </h4>
                            <h6 class="card-title"> {structures.forge ===0?'pas construite':"lvl :" +structures.forge} </h6>
                            <p class="card-text">
                                Some quick example text to build on the card title
                                and make up the bulk of the card's content.
                            </p>
                            <ul>
                                <li>bois : {inventaireJoueur.bois} / 20</li>
                                <li>nourriture : {inventaireJoueur.nourriture} / 15</li>
                            </ul>
                            <a href="#!" class="btn btn-primary">{structures.forge ===0?'Construire':"Améliorer"}</a>
                            </div>
                        </div>
                    </div>
                </>
            )
    
        }

        else
        return(<>
        
            
        </>)
    }
}
