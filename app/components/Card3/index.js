/**
 *
 * Card3
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import CardSide from '../CardSide/Loadable';
import nat6 from '../../images/nat-6.jpg';

function Card3() {
  return (
    <Main>
      <CardSide>
        <CardSideFront>
          <Picture1>&nbsp;</Picture1>
          <Heading>
            <HeadingSpan1>The Snow Adventurer</HeadingSpan1>
          </Heading>
          <Details>
            <DetailList>
              <li>5 day tours</li>
              <li>Up to 15 people</li>
              <li>3 tour guides</li>
              <li>Sleep in provided tents</li>
              <li>Difficulty: hard</li>
            </DetailList>
          </Details>
        </CardSideFront>
      </CardSide>
    </Main>
  );
}

const Main = styled.div`
  position: relative;
  left: calc(200% + 12rem);
`;

const CardSideFront = styled.div`
  background-color: #fff;
  height: 100%;
`;

const Picture = styled.div`
  height: 23rem;
  background-size: cover;
  background-blend-mode: screen;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
`;

const Picture1 = styled(Picture)`
  background-image: linear-gradient(
      to right bottom,
      rgba(45, 14, 233),
      rgba(143, 0, 255)
    ),
    url(${nat6});
`;

const Heading = styled.h4`
  font-size: 2.5rem;
  text-transform: uppercase;
  position: absolute;
  top: 12rem;
  right: 2rem;
  color: rgba(255, 255, 255, 0.9);
  text-align: right;
  width: 70%;
`;

const HeadingSpan = styled.span`
  padding: 1rem 1.5rem;
  line-height: 4.4rem;
  -webkit-box-direction-break: clone;
  box-decoration-break: clone;
`;

const HeadingSpan1 = styled(HeadingSpan)`
  background-image: linear-gradient(
    to right bottom,
    rgba(45, 14, 233, 0.85),
    rgba(143, 0, 255, 0.85)
  );
`;

const Details = styled.div`
  padding: 3rem;
`;

const DetailList = styled.ul`
  li {
    margin: 0 auto;
    list-style: none;
    width: 80%;
    text-align: center;
    font-size: 1.5rem;
    padding: 0.9rem;
    color: grey;
    &:not(:last-child) {
      border-bottom: 0.2px solid #eee;
    }
  }
`;

Card3.propTypes = {};

export default Card3;
