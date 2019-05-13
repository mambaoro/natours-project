/**
 *
 * CardSide
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

function CardSide(props) {
  // eslint-disable-next-line react/prop-types
  return <Main>{props.children}</Main>;
}

const Main = styled.div`
  position: absolute;
  height: 51rem;
  width: 100%;
  top: 0;
  left: 0;
  color: #fff;
  font-size: 2rem;
  height: 50rem;
  border-radius: 0.3rem;
  overflow: hidden;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.3);
`;

CardSide.propTypes = {};

export default CardSide;
