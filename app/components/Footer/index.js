/**
 *
 * Footer
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from '../../images/logo-green-2x.png';

function Footer() {
  return (
    <Main>
      <FooterLogoBox>
        <LogoImg src={logo} alt="Full logo" />
      </FooterLogoBox>
      <Row>
        <Col1of2>
          <FooterNavigation>
            <FooterNavList>
              <FooterNavItem>
                <FooterNavLink href="#">Company</FooterNavLink>
                <FooterNavLink href="#">Contact us</FooterNavLink>
                <FooterNavLink href="#">Career</FooterNavLink>
                <FooterNavLink href="#">Privacy policy</FooterNavLink>
                <FooterNavLink href="#">Terms</FooterNavLink>
              </FooterNavItem>
            </FooterNavList>
          </FooterNavigation>
        </Col1of2>
        <Col1of2>
          <FooterCopyright>
            Built by <FooterNavLink href="#">Mamadou Baoro</FooterNavLink> for
            learning purposes. Copyright &copy; by Jonas Schemdtmann. You are
            100% allowed to use this webpage for both personal and commercial
            use, but NOT claim it as your own design.
          </FooterCopyright>
        </Col1of2>
      </Row>
    </Main>
  );
}

const Main = styled.footer`
  background-color: #333;
  padding: 10rem 0;
  font-size: 1.4rem;
  color: #f7f7f7;
`;

const UCenterText = styled.div`
  text-align: center;
`;

const UMarginBottomBig = styled(UCenterText)`
  margin-bottom: 8rem;
`;

const FooterLogoBox = styled(UMarginBottomBig)`
  text-align: center;
`;

const LogoImg = styled.img`
  width: 15rem;
  height: auto;
`;

const FooterNavigation = styled.div`
  padding-top: 2rem;
  border-top: 1px solid #777;
  display: inline-block;
`;

const FooterNavList = styled.ul``;

const FooterNavItem = styled.li`
  display: inline-block;
`;

const FooterNavLink = styled.a`
  :not(:last-child) {
    margin-right: 1.5rem;
  }
  :link,
  :visited {
    color: #f7f7f7;
    background-color: #333;
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    transition: all 0.06s;
  }
  :hover,
  :active {
    color: #55c57a;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
    transform: rotate(5deg) scale(1.05);
  }
`;

const FooterCopyright = styled.p`
  padding-top: 2rem;
  border-top: 1px solid #777;
  width: 80%;
  float: right;
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
  }
`;

const Col1of2 = styled.div`
  width: calc((100% - (${gutterHorizontal})) / 2);
  ${colGlobalSetup}
`;
// [End] - Bad practice - duplicate from another file

Footer.propTypes = {};

export default Footer;
