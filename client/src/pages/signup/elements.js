import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';


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

export const SignUp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 488px;
    width: 100%;
`

export const SignUpTitle = styled.div`
    padding-bottom: 30px;
    h1 {
        font-family: 'Nanum Gothic', sans-serif;
        font-weight: 400;
    }
`

export const SignUpContainer = styled.div`
    width: 90%;
    padding: 24px;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
`

export const SignInLink = styled.div`
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

export const SignUpForm = styled.form`
    display: flex;
    flex-direction: column;
`

export const NameFormGroup = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 8px;
`

export const GroupContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    column-gap: 10px;
    input {
        width: 100%;
        display: block;
        padding: 0 16px;
        border: 1px solid #e6e6e6;
        border-radius: 4px;
        height: 40px;
    }
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`

export const InputBox = styled.div`
    display: flex;
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

export const Agreement = styled.div`
    display: flex;
    margin-top: 10px;
    align-items: center;
    input {
        width: 18px;
        height: 18px;
    }
    label {
        margin-left: 5px;
        font-size: 12px;
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