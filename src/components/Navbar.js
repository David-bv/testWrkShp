import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { logout } from '../actions/actionLogin';

const Nav = styled.nav`
    background-color: #db7093;
`

export const Navbar = () => {

     const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <div>
            <Nav className="navbar navbar-light #db7093">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img
                        alt=""
                        src="https://res.cloudinary.com/duzf4vfki/image/upload/v1630692325/Clases/geek_wctguy.png"
                        width="80" /></a>

                    <button
                        onClick={() => handleLogout()}
                        className="navbar-toggler-icon" to=""></button>
                </div>
            </Nav>

        </div>
    )
}
