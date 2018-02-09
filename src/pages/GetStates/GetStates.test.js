import React from 'react';
import { shallow } from 'enzyme';

import GetStates from './';

describe('Page GetStates', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<GetStates />);
    expect(wrapper).toMatchSnapshot();
  });
});
