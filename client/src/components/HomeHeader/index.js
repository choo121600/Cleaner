import React, { Component } from 'react'

import { AppHeader, Comtainer, HeaderNav, NavLink, NavBtn } from "./elements";

export class HomeHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            brand: 'cleaner',
        }
    }
    render() {
        return (
            <AppHeader>
                <Comtainer>
                    <HeaderNav>
                        <NavLink to="/">
                            <h1>{this.state.brand}</h1>
                        </NavLink>
                        <NavBtn>
                            <NavLink to="/signup">Sign up</NavLink>
                            <NavLink to="/login">Log In</NavLink>
                        </NavBtn>
                    </HeaderNav>
                </Comtainer>
            </AppHeader>
        )
    }
}

export default HomeHeader;
