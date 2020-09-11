import React, { Component } from 'react'
import Axios from 'axios';

export default class AdminPanel extends Component {

    state={
        role : null,
        email:'',
        password:'',
        message:"",
    }

    componentWillMount()
    {
        if(sessionStorage.getItem('email'))
        {
            let bodyFormData = new FormData();
            bodyFormData.set('email',localStorage.getItem('email'));
            Axios.post('http://127.0.0.1:8000/api/get-user',bodyFormData)
            .then(res=>{
                console.log(res.data);
                this.setState({role:res.data.role})
            })
            .catch(error=>error.response)
    
        }
    }

    handleChangeEmail=elmt=>
    {
        const email = elmt.target.value;
        this.setState({email});
    }
    handleChangePassword=elmt=>
    {
        const password = elmt.target.value;
        this.setState({password});
    }

    handleSubmit=()=>
    {
        let bodyFormData = new FormData();
        bodyFormData.set('email',this.state.email);
        bodyFormData.set('password',this.state.password);
        
        Axios.post('http://127.0.0.1:8000/api/login',bodyFormData)
        .then(res=>{
            console.log(res.data);
            this.setState({role:res.data.role})
            sessionStorage.setItem('email',res.data.email)
            
        })
        .catch(error=>error.response)
}   

    render() {
        if(this.state.role ===1)
        {
            return(
                <div>
                    <h1>welcome Admin</h1>
                </div>
            )
        }
        if(this.state.role===0){
            return (
                <div></div>
            )
        }
        if(this.state.role ===null)
        {
            return (
            <div>
                <nav className="container-fluid w-25 ">
                <div className="form-group d-flex flex-column justify-content-center">
                    <input onChange={this.handleChangeEmail} type="text" className="form-control mb-3" name="email" placeholder="Entrer votre adress email"/>
                    <input onChange={this.handleChangePassword} type="password" className="form-control mb-3"  name="password" placeholder="Entrer votre mot de passe"/>
                    <button onClick={this.handleSubmit} className="btn btn-primary">Connection</button>
                    {this.state.message}
                </div>
                </nav>
            </div>
        )

        }
    }
}
