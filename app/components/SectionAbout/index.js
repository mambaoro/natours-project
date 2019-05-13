/**
 *
 * SectionAbout
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Composition from '../Composition/Loadable';
import SectionFeatures from '../SectionFeatures/Loadable';
import SectionTours from '../SectionTours/Loadable';
import SectionBooking from '../SectionBooking/Loadable';
import { respond } from '../media_queries/index';

function SectionAbout() {
  return (
    <Section>
      <UMarginBottomBig>
        <HeadingSecondary>
          Exciting tours for adventurous people
        </HeadingSecondary>
      </UMarginBottomBig>
      <Row>
        <Col1of2>
          <UMarginBottomSmall>
            <HeadingTertiary>
              You&apos;re going to fall in love with nature
            </HeadingTertiary>
          </UMarginBottomSmall>
          <Paragraph>
            Fusce scelerisque felis leo, non consectetur sapien commodo eget.
            Integer ac dictum mauris. Duis finibus urna in luctus mattis. Mauris
            non egestas magna.
          </Paragraph>
          <UMarginBottomSmall>
            <HeadingTertiary>
              Live adventures like you never have before
            </HeadingTertiary>
          </UMarginBottomSmall>
          <Paragraph>
            Donec urna lectus, aliquam vitae laoreet id, luctus et sapien.
            Praesent eu efficitur sem, sed tristique arcu. Fusce sem justo,
            tincidunt eget tristique finibus, tempor ut odio.
          </Paragraph>
          <ButtonText id="button" href="#button">
            Learn more &rarr;
          </ButtonText>
        </Col1of2>
        <Col1of2>
          <Composition />
        </Col1of2>
      </Row>
      <SectionFeatures />
      <SectionTours />
      <SectionBooking />
    </Section>
  );
}

const colorGreyLight1 = `#f7f7f7`;
const colorWhite = `#fff`;
const colorPrimary = `#55c57a`;
const fontSizeDefault = `1.6rem`;
const buttonShadow = `rgba(0, 0, 0, 0.15)`;

const Section = styled.section`
  background-color: ${colorGreyLight1};
  padding: 25rem 0;
  margin-top: -20vh;
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
  ${respond(
    'tab-port',
    `
    font-size: 3rem;
  `,
  )}
  ${respond(
    'phone',
    `
    font-size: 2.5rem;
  `,
  )}
`;

const UMarginBottomSmall = styled.div`
  margin-bottom: 1.5rem;
`;

const HeadingTertiary = styled.h3`
  font-size: ${fontSizeDefault};
  font-weight: 700;
  text-transform: uppercase;
`;

const Paragraph = styled.p`
  font-size: ${fontSizeDefault};
  :not(:last-child) {
    margin-bottom: 3rem;
  }
`;

const ButtonText = styled.a`
  :link,
  :visited {
    font-size: ${fontSizeDefault};
    color: ${colorPrimary};
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid ${colorPrimary};
    padding: 3px;
    transition: all 0.2s;
  }
  :hover {
    transform: translateY(-0.2rem);
    background-color: ${colorPrimary};
    color: ${colorWhite};
    box-shadow: 0 1rem 2rem ${buttonShadow};
  }
  :active {
    transform: translate(0);
    box-shadow: 0 0.5rem 1rem ${buttonShadow};
  }
`;

// Bad practice - duplicate from another file
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
`;

const gutterHorizontal = `6rem`;
const colGlobalSetup = `
  float: left;
  :not(:last-child) {
    margin-right: ${gutterHorizontal};
    ${respond('tab-port', `margin-right: 0; !important`)}
  }
  ${respond(
    'tab-port',
    `
    width: 100%; !important
  `,
  )}
`;

const Col1of2 = styled.div`
  width: calc((100% - (${gutterHorizontal})) / 2);
  ${colGlobalSetup}
`;
// [End] - Bad practice - duplicate from another file

SectionAbout.propTypes = {};

export default SectionAbout;
