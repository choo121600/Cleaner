import React, { Component } from 'react'
import Axios from 'axios'

export class signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: '',
            confirmPassword: '',
            email: '',
            emailReg: '',
            passwordReg: '',
        }
    }
    render() {
        const register = () => {
            if(this.state.passwordReg !== this.state.confirmPassword) {
                alert('Password and Confirm Password do not match')
            } else {
                Axios.post('http://localhost:5000/api/user/register', {
                    name: this.state.name,
                    email: this.state.emailReg,
                    password: this.state.passwordReg,
                }).then(res => {
                    console.log(res)
                }).catch(err => {
                    console.log(err)
                })
            }
        }

        const login = () => {
            Axios.post('http://localhost:5000/api/user/login', {
                email: this.state.email,
                password: this.state.password,
            }).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        }

        return (
            <div className='SignUp'>
                <div className='SignUp-container'>
                    <div className='SignUp-title'>
                        <h1>Sign Up</h1>
                        <label>name</label>
                        <input 
                            type='text' 
                            placeholder='Name' 
                            onChange={(e) => this.setState({name: e.target.value})}
                        />
                        <label>Email</label>
                        <input 
                            type='email' 
                            placeholder='Email'
                            onChange={(e) => this.setState({emailReg: e.target.value})}
                        />
                        <label>Password</label>
                        <input 
                            type='password' 
                            placeholder='Password'
                            onChange={(e) => this.setState({passwordReg: e.target.value})}
                        />
                        <label>Confirm Password</label>
                        <input 
                            type='password' 
                            placeholder='Confirm Password' 
                            onChange={(e) => this.setState({confirmPassword: e.target.value})}
                        />
                        <button
                            onClick={register}
                        >
                            Sign Up
                        </button>
                    </div>

                    <div className="login">
                        <h1>Log In</h1>
                        <label>Email</label>
                        <input 
                            type='email' 
                            placeholder='Email'
                            onChange={(e) => this.setState({email: e.target.value})}
                        />
                        <label>Password</label>
                        <input 
                            type='password' 
                            placeholder='Password'
                            onChange={(e) => this.setState({password: e.target.value})}
                        />
                        <button onClick={login}>Log In</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default signup
