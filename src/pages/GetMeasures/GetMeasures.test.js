import React from 'react';
import { shallow } from 'enzyme';

import GetMeasures from './';

describe('Page GetMeasures', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<GetMeasures />);
    expect(wrapper).toMatchSnapshot();
  });
});
