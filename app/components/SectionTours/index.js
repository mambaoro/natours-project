/**
 *
 * SectionTours
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '../Card/Loadable';
import Card2 from '../Card2/Loadable';
import Card3 from '../Card3/Loadable';
import { respond } from '../media_queries/index';
// import ToursButton from '../ToursButton/Loadable';

function SectionTours() {
  return (
    <Main>
      <UMarginBottomBig>
        <HeadingSecondary>Most popular tours</HeadingSecondary>
      </UMarginBottomBig>
      <Row>
        <Col1of3>
          <Card />
        </Col1of3>
        <Col1of3>
          <Card2 />
        </Col1of3>
        <Col1of3>
          <Card3 />
        </Col1of3>
        {/* <ToursButton>Discover all tours</ToursButton> */}
      </Row>
    </Main>
  );
}

const Main = styled.section`
  position: relative;
  background-color: ${colorGreyLight1};
  padding: 25rem 0 50rem 0;
  margin-top: -10rem;
`;

// Bad practice - duplicate code from another file
const colorGreyLight1 = `#f7f7f7`;

const clearfix = `
  content: "";
  display: table;
  clear: both;
`;

const Row = styled.div`
  max-width: 114rem;
  margin: 0 auto;
  :not(:last-child) {
    margin-bottom: 8rem;
  }
  font-size: 1.6rem;
  line-height: 2.4rem;
  ::after {
    ${clearfix}
  }
  height: 100%;
`;

const gutterHorizontal = `6rem`;
const colGlobalSetup = `
  float: left;
  &:not(:last-child) {
    margin-right: ${gutterHorizontal};
    ${respond('tab-port', `margin-right: 0 !important; margin-bottom: 2rem;`)}
  }
  ${respond(
    'tab-port',
    `
    width: 100%; !important
  `,
  )}
`;

const Col1of3 = styled.div`
  ${colGlobalSetup}
  width: calc((100% - 2 * ${gutterHorizontal}) / 3);
`;

const UCenterText = styled.div`
  text-align: center;
`;

const UMarginBottomBig = styled(UCenterText)`
  margin-bottom: 8rem;
`;

const HeadingSecondary = styled.h2`
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
// [End] Bad practice - duplicate code from another file

SectionTours.propTypes = {};

export default SectionTours;
