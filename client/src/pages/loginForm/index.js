import React, { useState } from 'react'
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
        if (!email || !password) {
            setErrors(["이메일과 비밀번호를 입력해주세요."])
        } else {
            setErrors([])
            dispatch(loginUser(body))
            .then(response => {
                if (response.payload.status === "success") {
                    console.log(props.history)
                    navigate('/')
                } else {
                    setErrors(["아이디 또는 비밀번호가 일치하지 않습니다."])
                }
            })
        }
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


// export class login extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             brand: 'cleaner',
//             password: '',
//             email: '',
//             loginStatus: false,
//             errors: [],
//         }
//     }
//     componentDidMount = () => {
//         Axios.get('http://localhost:5000/api/user/login').then(res => {
//             if (res.data.loggedIn) {
//                 console.log(res)
//                 this.setState({
//                     loginStatus: true,
//                 })
//             }
//         }).catch(err => {
//             console.log(err)
//         })
//     }
    
//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     submitForm = (event) => {
//         event.preventDefault()
//         const { history } = this.props;
//         let dataToSubmit = {
//             email: this.state.email,
//             password: this.state.password,
//         }

//         if (this.isFormValid(this.state)) {
//             this.setState({
//                 errors: [],
//             })
//             this.props.dispatch(loginUser(dataToSubmit))
//             .then(res => {
//                 console.log(res.payload.status)
//                 if (res.payload.status === "success") {
//                     this.setState({
//                         loginStatus: true,
//                     })
//                     console.log(this.props)
//                     this.props.history.push("/")
//                 }
//             })
//         } else {
//             this.setState({
//                 errors: ['Please fill out all fields'],
//             })
//         }
//     }

//     isFormValid = ({ email, password }) => email && password

//     render() {
//         return (
//             <Container>
//                 <AppHeader>
//                     <NavLink to="/">
//                         <h1>{this.state.brand}</h1>
//                     </NavLink>
//                 </AppHeader>
//                 <SignIn>
//                     <SignInTitle>
//                         <h1>로그인</h1>
//                     </SignInTitle>
//                     <SignInContainer>
//                         <SignUpLink>
//                             <h6>아직 회원이 아니신가요?</h6>
//                             <a href='/signup'><h6>Sign up</h6></a>
//                         </SignUpLink>
//                         <SignInForm>
//                             <FormContainer>
//                                 <label>Email</label>
//                                 <InputBox>
//                                     <input 
//                                         name='email'
//                                         type='email' 
//                                         placeholder='Email'
//                                         onChange={(e) => this.handleChange(e)}
//                                     />
//                                 </InputBox>
//                             </FormContainer>
//                             <FormContainer>
//                                 <label>Password</label>
//                                 <InputBox>
//                                     <input
//                                         name='password' 
//                                         type='password' 
//                                         placeholder='Password'
//                                         onChange={(e) => this.handleChange(e)}
//                                     />
//                                 </InputBox>
//                             </FormContainer>
//                             {this.state.errors.length > 0 && (
//                                 <div className='error'>
//                                     {this.state.errors.map((error, i) => (
//                                         <p key={i}>{error}</p>
//                                     ))}
//                                 </div>
//                             )}
//                             <Button onClick={this.submitForm}>
//                                 Log In
//                             </Button>
//                         </SignInForm>
//                         <SocialDiv>
//                             <SocialDivText>Or</SocialDivText>
//                         </SocialDiv>
//                         <SocialLoginWrap>
//                             <SocialLoginButton>
//                                 <span>Sign in with Google</span>
//                             </SocialLoginButton>
//                         </SocialLoginWrap>
//                     </SignInContainer>
//                 </SignIn>
//             </Container>
//         )
//     }
// }

// function mapStateToProps(state) {
//     return {
//         user: state.user
//     }
// }

// export default connect(mapStateToProps)(login)