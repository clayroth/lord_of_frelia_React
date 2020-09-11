import React, { Component } from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom';

export default class RegisterComponent extends Component {
    state = 
    {
        name:null,
        email:null,
        password:null,
        passwordConf:null,
        passwordConfStatus :'',
        redirect: false,
        redirectTo:"/",
    }
    
    componentDidMount()
    {
        if(localStorage.getItem('token'))
        {
            this.setState({redirect:true});
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        const data = this.state;
        if(data.email !== null && data.name !==null && data.password !==null && data.password === data.passwordConf)
        {
            let bodyFormData = new FormData();
            bodyFormData.set('name',this.state.name);
            bodyFormData.set('email',this.state.email);
            bodyFormData.set('password',this.state.password);
    
            Axios.post('http://127.0.0.1:8000/api/register',bodyFormData)
            .then(res=>{
                localStorage.setItem('token',res.data.api_token)
                localStorage.setItem('email',res.data.email)
                this.setState({redirect:true,redirectTo:"/portail"})
            })
            .catch(error=>error.response)
        }
        
        else
        {
            console.log('erreur')
        }
    }

    handleNameChange = event =>{
        this.setState({name:event.target.value},()=>{
            console.log(this.state)
        })
    }
    handleEmailChange = event =>{
        this.setState({email:event.target.value},()=>{
            console.log(this.state)
        })
    }
    handlePasswordChange = event =>{
        this.setState({password:event.target.value},()=>{
            console.log(this.state)
        })
        if(this.state.passwordConf === event.target.value)
        {
            this.setState({passwordConfStatus:''})
        }
        else
        {
            this.setState({passwordConfStatus:'vos mot de passe ne sont pas identique'})
        }

    }
    handlePasswordConfChange = event =>{
        this.setState({passwordConf:event.target.value},()=>{
            console.log(this.state)
        })

        if(this.state.password === event.target.value)
        {
            this.setState({passwordConfStatus:''})
        }
        else
        {
            this.setState({passwordConfStatus:'vos mot de passe ne sont pas identique'})
        }

    }

    render() {
        if(this.state.redirect)
        {
            return (
                <Redirect to="/"/>
            )
        }

        return (
            <div>

    <nav className="container-fluid w-25">
        <div className="form-group d-flex flex-column justify-content-center">
            <input onChange={this.handleNameChange} type="text" className="form-control mb-3"  placeholder="Entrer votre pseudo"/>
            <input onChange={this.handleEmailChange} type="email" className="form-control mb-3"  placeholder="Entrer votre adresse email"/>
            <input onChange={this.handlePasswordChange} type="password" className="form-control mb-3" placeholder="Entrer votre mot de passe"/>
            <input onChange={this.handlePasswordConfChange} type="password" className="form-control mb-3" placeholder="Confirmer votre mot de passe"/>
            <p className="alert-danger"> {this.state.passwordConfStatus} </p>
            <button onClick={this.handleSubmit} className="btn btn-primary">Inscription</button>
        </div>
    </nav>

            </div>
        )
    }
}
