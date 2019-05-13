/**
 *
 * GridTest
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

function GridTest() {
  return (
    <TestSection>
      <Row>
        <Col1of2>Col 1 of 2</Col1of2>
        <Col1of2>Col 1 of 2</Col1of2>
      </Row>
      <Row>
        <Col1of3>Col 1 of 3</Col1of3>
        <Col1of3>Col 1 of 3</Col1of3>
        <Col1of3>Col 1 of 3</Col1of3>
      </Row>
      <Row>
        <Col1of3>Col 1 of 3</Col1of3>
        <Col2of3>Col 2 of 3</Col2of3>
      </Row>
      <Row>
        <Col1of4>Col 1 of 4</Col1of4>
        <Col1of4>Col 1 of 4</Col1of4>
        <Col1of4>Col 1 of 4</Col1of4>
        <Col1of4>Col 1 of 4</Col1of4>
      </Row>
      <Row>
        <Col1of4>Col 1 of 4</Col1of4>
        <Col1of4>Col 1 of 4</Col1of4>
        <Col2of4>Col 2 of 4</Col2of4>
      </Row>
      <Row>
        <Col1of4>Col 1 of 4</Col1of4>
        <Col3of4>Col 3 of 4</Col3of4>
      </Row>
    </TestSection>
  );
}

GridTest.propTypes = {};

const clearfix = `
  content: "";
  display: table;
  clear: both;
`;

const TestSection = styled.section``;

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

const gutterHorizontal = `6rem`;
const colGlobalSetup = `
  background-color: orangered;
  float: left;
  :not(:last-child) {
    margin-right: ${gutterHorizontal};
  }
`;

const Col1of2 = styled.div`
  width: calc((100% - (${gutterHorizontal})) / 2);
  ${colGlobalSetup}
`;

const Col1of3 = styled.div`
  width: calc((100% - 2 * ${gutterHorizontal}) / 3);
  ${colGlobalSetup}
`;

const Col2of3 = styled.div`
  width: calc(
    2 * ((100% - 2 * ${gutterHorizontal}) / 3) + (${gutterHorizontal})
  );
  ${colGlobalSetup}
`;

const Col1of4 = styled.div`
  width: calc((100% - 3 * ${gutterHorizontal}) / 4);
  ${colGlobalSetup}
`;

const Col2of4 = styled.div`
  width: calc(
    2 * ((100% - 3 * ${gutterHorizontal}) / 4) + (${gutterHorizontal})
  );
  ${colGlobalSetup};
`;

const Col3of4 = styled.div`
  width: calc(
    3 * ((100% - 3 * ${gutterHorizontal}) / 4) + (2 * ${gutterHorizontal})
  );
  ${colGlobalSetup}
`;

export default GridTest;
