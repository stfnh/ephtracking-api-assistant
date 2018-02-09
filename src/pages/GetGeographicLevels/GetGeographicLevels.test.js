import React from 'react';
import { shallow } from 'enzyme';

import GetGeographicLevels from './';

describe('Page GetGeographicLevels', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<GetGeographicLevels />);
    expect(wrapper).toMatchSnapshot();
  });
});
