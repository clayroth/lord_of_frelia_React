import React, { Component } from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'
import Inventaire from './User/Inventaire';
import Structure from './User/Structure';

export default class portail extends Component {
    state ={
        userInfos: null,
        isLog:false,
        isLoading:false,
        redirect:false,

    }
    
    componentDidMount()
    {
        if(localStorage.getItem('email'))
        {

            let bodyFormData = new FormData();
            bodyFormData.set('email',localStorage.getItem('email'));
            
            Axios.post('http://127.0.0.1:8000/api/get-user',bodyFormData)
            .then(res=>{
                const userData = res.data;
                this.setState({userInfos:userData});
                this.setState({isLoading:true});
            })
            .catch(error=>error.response)
        }
        else
        {
            this.setState({redirect:true})
        }
    }

    render() 
    {
        if(this.state.redirect)
        {
            return (<Redirect to="/"/>)
        }
        
        if(this.state.isLoading)
        {
            const user = this.state.userInfos;
            const inventaire = this.state.userInfos.inventaire;
            const structure = this.state.userInfos.struc_level;
            // const travailleur = this.state.userInfos.inventaire_travailleur;
            // const combattant = this.state.userInfos.inventaire_combattant;
            return (
                <div>
                    <h1 className="text-center">Bienvenu Lord {user.name}</h1>

                    <Inventaire inv={inventaire}/>
                    <Structure struc = {structure} inv={inventaire}/>
                </div>
            )
    
        }
        else
        {
            return(
                <>
                    loading ...
                </>
            )
        }
    }

}
