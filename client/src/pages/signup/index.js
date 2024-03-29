import React, { Component } from 'react'
import Axios from 'axios'

import { 
    AppHeader, 
    Container, 
    NavLink, 
    SignInLink, 
    SignUp, 
    SignUpContainer,
    SignUpTitle, 
    SignUpForm,
    NameFormGroup,
    GroupContainer,
    FormContainer,
    InputBox,
    Button,
    Agreement,
} from "./elements";


export class signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            brand: 'cleaner',
            firstName: '',
            lastName: '',
            confirmPassword: '',
            emailReg: '',
            passwordReg: '',
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        Axios.defaults.withCredentials = true
        const register = () => {
            if(this.state.passwordReg !== this.state.confirmPassword) {
                alert('Password and Confirm Password do not match')
            } else {
                Axios.post('http://localhost:5000/api/user/register', {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.emailReg,
                    password: this.state.passwordReg,
                }).then(res => {
                    console.log(res)
                }).catch(err => {
                    console.log(err)
                })
            }
        }

        return (
            <Container>
                <AppHeader>
                    <NavLink to="/">
                        <h1>{this.state.brand}</h1>
                    </NavLink>
                </AppHeader>
                <SignUp>
                    <SignUpTitle>
                        <h1>회원 가입</h1>
                        <p>Create your account</p>
                    </SignUpTitle>
                    <SignUpContainer>
                        <SignInLink>
                            <h6>이미 회원이신가요?</h6>
                            <a href='/login'><h6>Sign in</h6></a>
                        </SignInLink>
                        <SignUpForm>
                            <NameFormGroup>
                                <GroupContainer>
                                    <label htmlFor="firstName">First Name</label>
                                    <InputBox>
                                        <input 
                                            name="firstName" 
                                            type="text" 
                                            id="firstName" 
                                            onChange={(e) => this.handleChange(e)}
                                        />
                                    </InputBox>
                                </GroupContainer>
                                <GroupContainer>
                                    <label htmlFor="lastName">Last Name</label>
                                    <InputBox>
                                        <input 
                                            name='lastName' 
                                            type="text" 
                                            id="lastName" 
                                            onChange={(e) => this.handleChange(e)}
                                        />
                                    </InputBox>
                                </GroupContainer>
                            </NameFormGroup>
                            <FormContainer>
                                <label>Email</label>
                                <InputBox>
                                    <input 
                                        name='emailReg'
                                        type='email' 
                                        onChange={(e) => this.handleChange(e)}
                                    />
                                </InputBox>
                            </FormContainer>
                            <FormContainer>
                                <label>Password</label>
                                <InputBox>
                                    <input 
                                        name='passwordReg'
                                        type='password' 
                                        onChange={(e) => this.handleChange(e)}
                                    />
                                </InputBox>
                            </FormContainer>
                            <FormContainer>
                                <label>Confirm Password</label>
                                <InputBox>
                                    <input 
                                        name='confirmPassword'
                                        type='password' 
                                        onChange={(e) => this.handleChange(e)}
                                    />
                                </InputBox>
                            </FormContainer>
                            <Agreement>
                                <input type="checkbox" id="agree" />
                                <label>
                                    이 서비스를 이용하는 것에 동의합니다.
                                </label>
                            </Agreement>
                            <Button
                                onClick={register}
                            >
                                Create Account
                            </Button>
                        </SignUpForm>
                    </SignUpContainer>
                </SignUp>
            </Container>
        )
    }
}

export default signup
