import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    max-width: 1280px;
    padding: 0 20px;
    margin: 0 auto;
    height: 100vh;
    @media (max-width: 768px) {
        padding: 0 20px;
        height: auto;
    }
`;

export const AppHeader = styled.header`
    display: flex;
    position: relative;
    margin-bottom: 30px;
    width: 100%;
`;

export const NavLink = styled(Link)`
    color: #000;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    padding: 0 20px;
    &:hover {
        color: #000;
    }
    h1 {
        color: #2828b3;
    }
`;

export const SignIn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 488px;
    width: 100%;
`

export const SignInTitle = styled.div`
    padding-bottom: 30px;
    h1 {
        font-family: 'Nanum Gothic', sans-serif;
        font-weight: 400;
    }
`

export const SignInContainer = styled.div`
    width: 90%;
    padding: 24px;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
`

export const SignUpLink = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 30px;
    h6 {
        margin: 0;
        font-size: 12px;
        font-weight: 400;
    }
    a {
        margin-left: 5px;
        text-decoration: none;
        &:hover {
            color: #2828b3;
            text-decoration: underline;
        }
        h6 {
            color: #2828b3;
            font-size: 12px;
            font-weight: 600;
            font-family: "san-serif";
        }
    }
`

export const SignInForm = styled.form`
    display: flex;
    flex-direction: column;
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`

export const InputBox = styled.div`
    display: flex;
    flex: 1 1 0%;
    align-items: center;
    position: relative;
    input {
        width: 100%;
        position: relative;
        display: block;
        padding: 0 16px;
        border: 1px solid #e6e6e6;
        border-radius: 4px;
        height: 40px;
    }
`

export const Button = styled.button`
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    font-family: "san-serif";
    width: 100%;
    display: block;
    padding: 0 16px;
    margin-top: 20px;
    background-color: #2828b3;
    border: 1px solid transparent;
    border-radius: 4px;
    min-width: 132px;
    height: 48px;
    cursor: pointer;
    &:hover {
        background-color: #072A6C;
    }
`

export const SocialDiv = styled.div`
    ::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 1px;
        background: #e6e6e6;
        top: 14px;
        left: 0px;
        z-index: 10;
    }
    position: relative;
    font-size: 12px;
    text-align: center;
    margin-top: 10px;
    padding: 4px 0;
`

export const SocialDivText = styled.div`
    display: inline-block;
    position: relative;
    z-index: 20;
    padding: 0 10px;
    background: #fff;
`

export const SocialLoginWrap = styled.div`
    padding: 14px 0;
`

export const SocialLoginButton = styled.button`
    width: 100%;
    cursor: pointer;
    transition: background-color .3s, box-shadow .3s;
        
    padding: 12px 16px 12px 42px;
    border: 1px solid #e6e6e6;
    border-radius: 3px;

    color: #757575;
    font-size: 14px;
    font-weight: 500;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif;

    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
    background-color: white;
    background-repeat: no-repeat;
    background-position: 12px 11px;
    &:hover {
        border:1px solid #b217b4
    }
    span {
        color: #5E5E5E;
        font-size: 16px;
        font-weight: 600;
        font-family: "san-serif";
        display: flex;
        justify-content: center;
        margin-right: 24px;
    }
`