import React, { useState } from 'react'
import Axios from 'axios'
import { useNavigate } from "react-router-dom";


import { connect, useDispatch } from 'react-redux'
import { loginUser } from '../../actions/user_action'

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

function Login(props) {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState([])

    const { email, password } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }


    const submitForm = (event) => {
        event.preventDefault(); // 페이지 리프레시 방지

        let body ={
            email: email,
            password: password
        }

        dispatch(loginUser(body))
        .then(response => {
            if (response.payload.status === "success") {
                console.log(props.history)
                navigate('/')
            } else {
                setErrors([...errors, "아이디 또는 비밀번호가 일치하지 않습니다."])
            }
        })
    }

    return (
        <Container>
            <AppHeader>
                <NavLink to="/">
                    <h1>cleaner</h1>
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
                                    name='email'
                                    type='email' 
                                    placeholder='Email'
                                    onChange={onChange}
                                />
                            </InputBox>
                        </FormContainer>
                        <FormContainer>
                            <label>Password</label>
                            <InputBox>
                                <input
                                    name='password' 
                                    type='password' 
                                    placeholder='Password'
                                    onChange={onChange}
                                />
                            </InputBox>
                        </FormContainer>
                        {errors.length > 0 && (
                            <div className='error'>
                                {errors.map((error, i) => (
                                    <p key={i}>{error}</p>
                                ))}
                            </div>
                        )}
                        <Button onClick={submitForm}>
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


export default Login
