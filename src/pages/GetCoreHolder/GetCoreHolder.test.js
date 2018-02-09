import React from 'react';
import { shallow } from 'enzyme';

import GetCoreHolder from './';

describe('Page GetCoreHolder', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<GetCoreHolder />);
    expect(wrapper).toMatchSnapshot();
  });
});
