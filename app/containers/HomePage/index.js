/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Navigation from '../../components/Navigation/Loadable';
import Top from '../../components/Top/Loadable';
import Main from '../../components/Main/Loadable';
import Footer from '../../components/Footer/Loadable';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <Navigation />
        <Top />
        <Main />
        <Footer />
      </div>
    );
  }
}
