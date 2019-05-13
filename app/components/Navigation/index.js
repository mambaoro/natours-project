/**
 *
 * Navigation
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

function Navigation() {
  return (
    <Main>
      <NavCheckbox type="checkbox" id="nav-toggle" />
      <NavCheckBoxLabel htmlFor="nav-toggle">
        <NavIcon>&nbsp;</NavIcon>
      </NavCheckBoxLabel>
      <NavBackground>&nbsp;</NavBackground>
      <NavigationNav>
        <NavListContainer>
          <NavList>
            <NavItem>
              <NavLink href="#">
                <NavItemSpan>01</NavItemSpan>About Natours
              </NavLink>
            </NavItem>
          </NavList>
          <NavList>
            <NavItem>
              <NavLink href="#">
                <NavItemSpan>02</NavItemSpan>Your benefits
              </NavLink>
            </NavItem>
          </NavList>
          <NavList>
            <NavItem>
              <NavLink href="#">
                <NavItemSpan>03</NavItemSpan>Popular tours
              </NavLink>
            </NavItem>
          </NavList>
          <NavList>
            <NavItem>
              <NavLink href="#">
                <NavItemSpan>04</NavItemSpan>Stories
              </NavLink>
            </NavItem>
          </NavList>
          <NavList>
            <NavItem>
              <NavLink href="#">
                <NavItemSpan>05</NavItemSpan>Book now
              </NavLink>
            </NavItem>
          </NavList>
        </NavListContainer>
      </NavigationNav>
    </Main>
  );
}

const Main = styled.div`
  input:checked ~ div:first-of-type {
    transform: scale(100);
  }
  input:checked ~ nav {
    width: 100vw;
    opacity: 1;
  }
`;

const NavCheckbox = styled.input`
  display: none;
`;

const NavIcon = styled.span`
  width: 3rem;
  height: 2px;
  background-color: #333;
  display: inline-block;
  position: relative;
  top: 50%;
  ::after,
  ::before {
    content: '';
    display: inline-block;
    position: absolute;
    left: 0;
  }
  ::before {
    top: -1rem;
  }
  ::after {
    top: 1rem;
  }
`;

const NavCheckBoxLabel = styled.label`
  background-color: #fff;
  height: 7rem;
  width: 7rem;
  position: fixed;
  top: 6rem;
  right: 6rem;
  border-radius: 50%;
  z-index: 2000;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.15);
  text-align: center;
`;

const NavBackground = styled.div`
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  position: fixed;
  top: 6.5rem;
  right: 6.5rem;
  background-image: radial-gradient(rgba(126, 213, 111), rgba(40, 180, 131));
  z-index: 1000;
  transform: scale(0);
  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
`;

const NavigationNav = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1500;
  text-align: center;
  opacity: 0;
  width: 0;
  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`;

const NavListContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
`;

const NavList = styled.ul``;

const NavItem = styled.li`
  margin-bottom: 2rem;
`;

const NavItemSpan = styled.span`
  margin-right: 1rem;
  display: inline-block;
`;

const NavLink = styled.a`
  :link,
  :visited {
    display: inline-block;
    font-size: 3rem;
    font-weight: 300;
    padding: 1rem 2rem;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    background-image: linear-gradient(
      120deg,
      transparent 0%,
      transparent 50%,
      #fff 50%
    );
    background-size: 230%;
    transition: all 0.4s;
  }
  :hover,
  :active {
    background-position: 100%;
    color: #55c57a;
    transform: translateX(1rem);
  }
`;

Navigation.propTypes = {};

export default Navigation;
