/**
 *
 * Header
 *
 */

// import PropTypes from 'prop-types';
import styled from 'styled-components';
import hero from '../../images/hero.jpg';

// const colorPrimary = `#55c57a`;
// const colorPrimaryLight = `#7ed56f`;
// const colorPrimaryDark = `#28b485`;

const Header = styled.header`
  position: relative;
  height: 95vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(126, 213, 111, 0.8),
      rgba(40, 180, 131, 0.8)
    ),
    url(${hero});
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
`;

export default Header;
