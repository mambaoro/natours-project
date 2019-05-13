/**
 *
 * HeaderImg
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import logoWhite from '../../images/logo-white.png';

function HeaderImg() {
  return (
    <HeaderLogoBox>
      <HeaderLogo src={logoWhite} alt="Logo" />
    </HeaderLogoBox>
  );
}

const HeaderLogoBox = styled.div`
  position: absolute;
  top: 4rem;
  left: 4rem;
`;

// const moveInRight = keyframes`
//   from {
//     opacity: 0;
//     transform: translateX(100px);
//   }
//   to {
//     opacity: 1;
//     transform: translate(0);
//   }
// `;

const HeaderLogo = styled.img`
  height: 3.5rem;
`;

HeaderImg.propTypes = {};

export default HeaderImg;
