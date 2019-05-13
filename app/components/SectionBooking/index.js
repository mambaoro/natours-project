/**
 *
 * SectionBooking
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import BookForm from '../BookForm/Loadable';
import nat10 from '../../images/nat-10.jpg';

function SectionBooking() {
  return (
    <Main>
      <Row>
        <Book>
          <UMarginBottomBig>
            <HeadingSecondary>Start booking now</HeadingSecondary>
          </UMarginBottomBig>
          <BookForm />
        </Book>
      </Row>
    </Main>
  );
}

const Main = styled.section`
  margin-top: 12rem;
  padding: 15rem 0;
  background-image: linear-gradient(
    to right bottom,
    rgba(126, 213, 111),
    rgba(40, 180, 131)
  );
`;

const Book = styled.div`
  background-image: linear-gradient(
      105deg,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(255, 255, 255, 0.9) 50%,
      transparent 50%
    ),
    url(${nat10});
  background-size: 100%;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgb(0, 0, 0, 0.25);
  height: 50rem;
`;

const UMarginBottomBig = styled.div`
  margin-bottom: 6rem;
  padding: 6rem 5rem 0 5rem;
`;

const HeadingSecondary = styled.h2`
  padding: 0.5rem;
  font-size: 3.5rem;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
  background-image: linear-gradient(
    to right,
    rgba(126, 213, 111, 0.8),
    rgba(40, 180, 131, 0.8)
  );
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 0.2rem;
  transition: all 0.2s;
  :hover {
    transform: skewY(2deg) skewX(15deg);
    text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.2);
  }
`;

const clearfix = `
  content: "";
  display: table;
  clear: both;
`;

const Row = styled.div`
  max-width: 114rem;
  background-color: #eee;
  margin: 0 auto;
  :not(:last-child) {
    margin-bottom: 8rem;
  }
  font-size: 1.6rem;
  line-height: 2.4rem;
  ::after {
    ${clearfix}
  }
`;

SectionBooking.propTypes = {};

export default SectionBooking;
