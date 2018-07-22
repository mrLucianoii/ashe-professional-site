/**
 * Test the HomePage
 */
import React from 'react';
import { shallow } from 'enzyme';

import MediaSlider from 'components/MediaSlider';
import  HomePage from '../index';


describe('<HomePage />', () => {
  it('should render the MediaSlider', () => {
    const renderedComponent = shallow(
      <HomePage />,
    );
    expect(
      renderedComponent.contains(
        <MediaSlider />,
      ),
    ).toEqual(true);
  });
});
