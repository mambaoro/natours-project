/**
 *
 * HeadingPrimary
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import ButtonHeader from '../ButtonHeader/Loadable';
import { respond } from '../media_queries/index';

function HeadingPrimary() {
  return (
    <HeaderTextBox>
      <Primary>
        <MainHeading>Outdoors</MainHeading>
        <SubHeading>is where life happens</SubHeading>
      </Primary>
      <ButtonHeader />
    </HeaderTextBox>
  );
}

const HeaderTextBox = styled.div`
  position: absolute;
  display: inline-block;
  text-align: center;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const uppercase = `text-transform: uppercase`;
const color = `color: #fff`;

const Primary = styled.h1`
  ${color};
  ${uppercase};
`;

const moveInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10rem);
  }
  80% {
    transform: translateX(1rem);
  }
  to {
    opacity: 1;
    transform: translate(0);
  }
`;

const moveInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(10rem);
  }
  80% {
    transform: translateX(-1rem);
  }
  to {
    opacity: 1;
    transform: translate(0);
  }
`;

const MainHeading = styled.span`
  margin-bottom: 1.5rem;
  margin-right: -3.2rem;
  display: inline-block;
  font-size: 6rem;
  font-weight: 400;
  letter-spacing: 3.4rem;
  animation: ${moveInLeft} 1.6s ease-out;
  /* animation-delay: 3s; */
  /* animation-iteration-count: 3; */
  ${respond(
    'phone',
    `
    letter-spacing: 1rem;
    font-size: 5rem;
  `,
  )}
`;

const SubHeading = styled.span`
  margin-bottom: 6rem;
  margin-right: -0.74rem;
  margin-left: -0.74rem;
  display: block;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.74rem;
  animation: ${moveInRight} 1.6s ease-out;
  ${respond(
    'phone',
    `
    letter-spacing: 0.5rem;
  `,
  )}
`;

HeadingPrimary.propTypes = {};

export default HeadingPrimary;
