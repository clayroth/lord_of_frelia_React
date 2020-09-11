import React, { Component } from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class LoginComponent extends Component {
    state=
        {
            email:null,
            password:null,
            redirect : false,
        }

        componentDidMount()
        {
            if(localStorage.getItem('token'))
            {
                this.setState({redirect:true});
            }
        }
    

        handleChangeEmail=event=>
        {
            this.setState({email:event.target.value},()=>
            {
                console.log(this.state);
            })
        }
        handlePasswordlChange = event =>{
            this.setState({password:event.target.value},()=>{
                console.log(this.state)
            })
        }

        handleSubmit = event => {
            event.preventDefault();

            let bodyFormData = new FormData();
            bodyFormData.set('email',this.state.email);
            bodyFormData.set('password',this.state.password);
            
            Axios.post('http://127.0.0.1:8000/api/login',bodyFormData)
            .then(res=>{
                console.log(res.data);
                localStorage.setItem('token',res.data.api_token)
                localStorage.setItem('email',res.data.email)
                this.setState({redirect:true})
            })
            .catch(error=>error.response)
        }
    

        render() {
            if(this.state.redirect)
            {
                return (<Redirect to="/portail"/>)
            }
        return (
            <div>
                <nav className="container-fluid w-25 ">
                    <div className="form-group d-flex flex-column justify-content-center">
                        <input onChange={this.handleChangeEmail} type="text" className="form-control mb-3" name="email" placeholder="Entrer votre adress email"/>
                        <input onChange={this.handlePasswordlChange} type="password" className="form-control mb-3"  name="password" placeholder="Entrer votre mot de passe"/>
                        <button onClick={this.handleSubmit} className="btn btn-primary">Connection</button>
                    </div>
                </nav>
            </div>
        )
    }
}
