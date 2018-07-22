import React from 'react';
import { FormattedMessage } from 'react-intl';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
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
            <HeaderLink to="/reel">
              <FormattedMessage {...messages.reel} />
            </HeaderLink>
            <HeaderLink to="/gallary">
              <FormattedMessage {...messages.gallary} />
            </HeaderLink>
            <HeaderLink nav to="/">
              <FormattedMessage {...messages.home} />
            </HeaderLink>
          </Div>
        </NavBar>
      </div>
    );
  }
}

export default Header;
