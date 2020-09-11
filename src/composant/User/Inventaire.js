import React, { Component } from 'react'

export default class Inventaire extends Component {

    state ={
        inventaire:null,
        isLoading:false,
    }

    componentDidMount()
    {
        const data = this.props;

        this.setState({inventaire:data.inv})
        this.setState({isLoading:true})
    }

    render() {
        if(this.state.isLoading)
        return (
            <>
                    <div className="d-flex justify-content-center mt-5 mb-5">
                        <h3 className ="mr-5">Inventaire : </h3>
                        <ul className="list-group list-group-horizontal ">
                            <li className="list-group-item">bois : {this.state.inventaire.bois}</li>
                            <li className="list-group-item">pierre :{this.state.inventaire.pierre}</li>
                            <li className="list-group-item">nourriture :{this.state.inventaire.nourriture}</li>
                            <li className="list-group-item">minerai : {this.state.inventaire.minerai}</li>
                            <li className="list-group-item">metal : {this.state.inventaire.metal}</li>
                        </ul>
                    </div>
            </>
        )

        else
        return(<>
        
            
        </>)
    }
}
