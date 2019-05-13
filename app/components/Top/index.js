/**
 *
 * Top
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Header from '../Header/Loadable';
import HeaderImg from '../HeaderImg/Loadable';
import HeadingPrimary from '../HeadingPrimary/Loadable';
// import GridTest from '../GridTest/Loadable';

function Top() {
  return (
    <div>
      <Header>
        <HeaderImg />
        <HeadingPrimary />
      </Header>
      {/* <GridTest /> */}
    </div>
  );
}

Top.propTypes = {};

export default Top;
