import React, { Component } from 'react'
import Axios from 'axios'

import { 
    Container,
    AppHeader,
    NavLink,
    SignIn,
    SignInTitle,
    FormContainer,
    SignInForm,
    SignUpLink,
    SignInContainer,
    InputBox,
    Button,
    SocialDiv,
    SocialDivText,
    SocialLoginWrap,
    SocialLoginButton,
} from './elements'

export class login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            brand: 'cleaner',
            password: '',
            email: '',
            loginStatus: false,
        }
    }
    componentDidMount = () => {
        Axios.get('http://localhost:5000/api/user/login').then(res => {
            if (res.data.loggedIn) {
                console.log(res)
                this.setState({
                    loginStatus: true,
                })
            }
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        Axios.defaults.withCredentials = true
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
            <Container>
                <AppHeader>
                    <NavLink to="/">
                        <h1>{this.state.brand}</h1>
                    </NavLink>
                </AppHeader>
                <SignIn>
                    <SignInTitle>
                        <h1>로그인</h1>
                    </SignInTitle>
                    <SignInContainer>
                        <SignUpLink>
                            <h6>아직 회원이 아니신가요?</h6>
                            <a href='/signup'><h6>Sign up</h6></a>
                        </SignUpLink>
                        <SignInForm>
                            <FormContainer>
                                <label>Email</label>
                                <InputBox>
                                    <input 
                                        type='email' 
                                        placeholder='Email'
                                        onChange={(e) => this.setState({email: e.target.value})}
                                    />
                                </InputBox>
                            </FormContainer>
                            <FormContainer>
                                <label>Password</label>
                                <InputBox>
                                    <input 
                                        type='password' 
                                        placeholder='Password'
                                        onChange={(e) => this.setState({password: e.target.value})}
                                    />
                                </InputBox>
                            </FormContainer>
                            <Button onClick={login}>
                                Log In
                            </Button>
                        </SignInForm>
                        <SocialDiv>
                            <SocialDivText>Or</SocialDivText>
                        </SocialDiv>
                        <SocialLoginWrap>
                            <SocialLoginButton>
                                <span>Sign in with Google</span>
                            </SocialLoginButton>
                        </SocialLoginWrap>
                    </SignInContainer>
                </SignIn>
            </Container>
        )
    }
}

export default login
