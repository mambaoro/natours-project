/* eslint-disable react/prop-types */
/**
 *
 * ToursButton
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

function ToursButton(props) {
  return (
    <UMarginTopBig>
      <Main href="#button-tours" id="button-tours">
        {props.children}
      </Main>
    </UMarginTopBig>
  );
}

const colorRgbaBlackWithOpacity = `rgba(0, 0, 0, 0.2)`;

const Main = styled.a`
  :link,
  :visited {
    background-color: rgba(40, 180, 131);
    color: #fff;
    font-size: 1.6rem;
    display: inline-block;
    text-transform: uppercase;
    text-decoration: none;
    padding: 3rem 4rem;
    border-radius: 10rem;
    transition: all 0.2s;
    outline: none;
  }
  :hover {
    box-shadow: 0 1rem 1rem ${colorRgbaBlackWithOpacity};
    transform: translateY(-0.5rem);
  }
  :active {
    transform: translateY(0.05rem);
    box-shadow: 0 0.4rem 0.4rem ${colorRgbaBlackWithOpacity};
  }
`;

// Bad practice - duplicate from another file

const UCenterText = styled.div`
  transform: translateX(-50%);
  text-align: center;
  position: absolute;
  top: 130%;
  left: 50%;
  margin-bottom: 50rem;
`;

const UMarginTopBig = styled(UCenterText)`
  margin-top: 8rem;
`;
// [End] - Bad practice - duplicate from another file

ToursButton.propTypes = {};

export default ToursButton;
