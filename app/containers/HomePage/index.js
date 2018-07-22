/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import MediaSlider from '../../components/MediaSlider';

export default class HomePage extends React.PureComponent {
  render() {
    
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="Ashe Rain Turner"
          />
        </Helmet>
        <div>
          <MediaSlider />
        </div>
      </article>
    );
  }
}