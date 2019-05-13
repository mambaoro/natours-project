/**
 *
 * ButtonHeader
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

function ButtonHeader() {
  return <Button href="#">Discover our tours</Button>;
}

const moveInBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translate(0);
  }
`;

const ButtonAnimated = styled.a`
  animation: ${moveInBottom} 0.5s ease-out 0.75s;
  animation-fill-mode: backwards;
`;

const colorGreyDark = `#777`;
const colorWhite = `#fff`;
const colorRgbaBlackWithOpacity = `rgba(0, 0, 0, 0.2)`;

const ButtonWhite = styled(ButtonAnimated)`
  background-color: ${colorWhite};
  color: ${colorGreyDark};
  ::after {
    content: '';
    background-color: ${colorWhite};
  }
`;

const Button = styled(ButtonWhite)`
  :link,
  :visited {
    font-size: 1.6rem;
    display: inline-block;
    text-transform: uppercase;
    text-decoration: none;
    padding: 3rem 4rem;
    border-radius: 10rem;
    transition: all 0.2s;
    position: relative;
    outline: none;
  }
  :hover {
    transform: translateY(-0.3rem);
    box-shadow: 0 1rem 2rem ${colorRgbaBlackWithOpacity};
    ::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }
  :active {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.5rem 1rem ${colorRgbaBlackWithOpacity};
  }
  ::after {
    content: '';
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0%;
    z-index: -1;
    transition: all 0.4s;
  }
`;

ButtonHeader.propTypes = {};

export default ButtonHeader;
