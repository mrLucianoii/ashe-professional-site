import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';
import Div from '../Div';
import H1 from '../H1';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <div>
        <NavBar>
          <Div navLogo>
            <H1 logo>Ash&eacute; Rain Turner</H1>
          </Div>
          <Div navLinks>
            <HeaderLink to="/gallary">
              <FormattedMessage {...messages.gallary} />
            </HeaderLink>
            <HeaderLink nav to="/">
              <FormattedMessage {...messages.home} />
            </HeaderLink>
          </Div>
        </NavBar>
        <A href="https://twitter.com/mxstbr">
          <Img src={Banner} alt="react-boilerplate - Logo" />
        </A>
      </div>
    );
  }
}

export default Header;
