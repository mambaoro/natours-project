/**
 *
 * Composition
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import nat1 from '../../images/nat-1-large.jpg';
import nat2 from '../../images/nat-2-large.jpg';
import nat3 from '../../images/nat-3-large.jpg';

function Composition() {
  return (
    <Main>
      <CompositionPhoto1 src={nat1} alt="Photo 1" />
      <CompositionPhoto2 src={nat2} alt="Photo 2" />
      <CompositionPhoto3 src={nat3} alt="Photo 3" />
    </Main>
  );
}

const colorPrimary = `#55c57a`;

const Main = styled.div`
  position: relative;
  img {
    width: 55%;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
    border-radius: 2px;
    position: absolute;
    transition: all 0.2s;
    outline-offset: 2rem;
    :hover {
      outline: 1.5rem solid ${colorPrimary};
      transform: scale(1.05) translateY(-0.5rem);
      box-shadow: 0 2.5rem 4rem rgba(0, 0, 0, 0.5);
      z-index: 1;
    }
  }
  :hover img:not(:hover) {
    transform: scale(0.95);
  }
`;

const CompositionPhoto1 = styled.img`
  left: 0;
  top: -2rem;
`;

const CompositionPhoto2 = styled.img`
  right: 0;
  top: 2rem;
`;

const CompositionPhoto3 = styled.img`
  left: 20%;
  top: 10rem;
`;

Composition.propTypes = {};

export default Composition;
