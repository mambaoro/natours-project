/**
 *
 * SectionFeatures
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import '../../icons/icon-font.css';
import nat4 from '../../images/nat-4.jpg';
import { respond } from '../media_queries/index';

function SectionFeatures() {
  return (
    <Main>
      <Row>
        <Col1of4>
          <FeatureBox>
            <IconBasicWorld className="icon-basic-world" />
            <UMarginBottomSmall>
              <HeadingTertiary>Explore the world</HeadingTertiary>
            </UMarginBottomSmall>
            <Text>
              Duis finibus urna in luctus mattis. Mauris non egestas magna.
            </Text>
          </FeatureBox>
        </Col1of4>
        <Col1of4>
          <FeatureBox>
            <IconBasicWorld className="icon-basic-compass" />
            <UMarginBottomSmall>
              <HeadingTertiary>Meet nature</HeadingTertiary>
            </UMarginBottomSmall>
            <Text>
              Duis finibus urna in luctus mattis. Mauris non egestas magna.
            </Text>
          </FeatureBox>
        </Col1of4>
        <Col1of4>
          <FeatureBox>
            <IconBasicWorld className="icon-basic-map" />
            <UMarginBottomSmall>
              <HeadingTertiary>Find your way</HeadingTertiary>
            </UMarginBottomSmall>

            <Text>
              Duis finibus urna in luctus mattis. Mauris non egestas magna.
            </Text>
          </FeatureBox>
        </Col1of4>
        <Col1of4>
          <FeatureBox>
            <IconBasicWorld className="icon-basic-heart" />
            <UMarginBottomSmall>
              <HeadingTertiary>Live a healthier life</HeadingTertiary>
            </UMarginBottomSmall>

            <Text>
              Duis finibus urna in luctus mattis. Mauris non egestas magna.
            </Text>
          </FeatureBox>
        </Col1of4>
      </Row>
    </Main>
  );
}

const colorWhiteRGBAwithOpacity = `rgba(255, 255, 255, 0.8)`;

const Main = styled.section`
  padding: 20rem 0;
  vertical-align: top;
  background-image: linear-gradient(
      to right bottom,
      rgba(126, 213, 111, 0.8),
      rgba(40, 180, 131, 0.8)
    ),
    url(${nat4});
  background-size: cover;
  background-position: top;
  transform: skewY(-7deg);
  & > * {
    transform: skewY(7deg);
  }
`;

const FeatureBox = styled.div`
  background-color: ${colorWhiteRGBAwithOpacity};
  font-size: 1.5rem;
  padding: 2.5rem;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  transition: transform 0.3s;
  :hover {
    transform: scale(1.03) translateY(-1.5rem);
  }
`;

const IconBasicWorld = styled.i`
  display: inline-block;
  font-size: 6rem;
  color: transparent;
  padding-bottom: 3rem;
  background-image: linear-gradient(
    to right,
    rgba(126, 213, 111, 0.8),
    rgba(40, 180, 131, 0.8)
  );
  background-clip: text;
  -webkit-background-clip: text;
`;

const Text = styled.p``;

// Bad practice - duplicate from another file

const fontSizeDefault = `1.6rem`;
const UMarginBottomSmall = styled.div`
  margin-bottom: 1.5rem;
`;

const HeadingTertiary = styled.h3`
  font-size: ${fontSizeDefault};
  font-weight: 700;
  text-transform: uppercase;
`;

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

const Col1of4 = styled.div`
  width: calc((100% - 3 * ${gutterHorizontal}) / 4);
  ${colGlobalSetup}
`;

// [End] Bad practice - duplicate from another file

SectionFeatures.propTypes = {};

export default SectionFeatures;
