import React from 'react';
import { shallow } from 'enzyme';

import GetYears from './';

describe('Page GetYears', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<GetYears />);
    expect(wrapper).toMatchSnapshot();
  });
});
