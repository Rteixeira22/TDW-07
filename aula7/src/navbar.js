import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 1rem;
`;

const NavbarList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
`;

const NavbarItem = styled.li`
  margin: 0;

  a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    display: block;

    &:hover {
      background-color: #555;
    }
  }

  &.active a {
    background-color: #444; /* Fundo diferente */
    border: 2px solid red; /* Borda vermelha */
  }
`;

function Navbar() {
    const location = useLocation();

    return (
        <NavbarContainer>
            <NavbarList>
                <NavbarItem className={location.pathname === '/' ? 'active' : ''}>
                    <Link to="/">Home</Link>
                </NavbarItem>
                <NavbarItem className={location.pathname === '/about' ? 'active' : ''}>
                    <Link to="/about">Sobre</Link>
                </NavbarItem>
                <NavbarItem className={location.pathname === '/Ex1' ? 'active' : ''}>
                    <Link to="/Ex1">Aula 1</Link>
                </NavbarItem>
                <NavbarItem className={location.pathname === '/Ex2' ? 'active' : ''}>
                    <Link to="/Ex2">Aula 2</Link>
                </NavbarItem>
            </NavbarList>
        </NavbarContainer>
    );
}



export default Navbar;