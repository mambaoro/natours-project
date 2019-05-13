/**
 *
 * Card
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import CardSide from '../CardSide/Loadable';
import nat5 from '../../images/nat-5.jpg';

function Card() {
  return (
    <Main>
      <CardSide>
        <CardSideFront>
          <Picture1>&nbsp;</Picture1>
          <Heading>
            <HeadingSpan1>The Sea Explorer</HeadingSpan1>
          </Heading>
          <Details>
            <DetailList>
              <li>3 day tours</li>
              <li>Up to 30 people</li>
              <li>2 tour guides</li>
              <li>Sleep in cozy hotels</li>
              <li>Difficulty: easy</li>
            </DetailList>
          </Details>
        </CardSideFront>
      </CardSide>
    </Main>
  );
}

const Main = styled.div`
  position: relative;
`;

const CardSideFront = styled.div`
  background-color: #fff;
  height: 100%;
`;

const Picture = styled.div`
  height: 23rem;
  background-size: cover;
  background-blend-mode: screen;
  -webkit-clip-path: polygon(0, 100% 0, 100% 85%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
`;

const Picture1 = styled(Picture)`
  background-image: linear-gradient(
      to right bottom,
      rgb(233, 196, 14),
      rgb(255, 96, 0)
    ),
    url(${nat5});
`;

const Heading = styled.h4`
  font-size: 2.5rem;
  text-transform: uppercase;
  position: absolute;
  top: 12rem;
  right: 2rem;
  color: rgba(255, 255, 255, 0.9);
  text-align: right;
  width: 75%;
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
    rgb(233, 196, 14, 0.85),
    rgb(255, 96, 0, 0.85)
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

Card.propTypes = {};

export default Card;
