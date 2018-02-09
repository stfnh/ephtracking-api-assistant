import React from 'react';
import { shallow } from 'enzyme';

import Measurestratification from './';

describe('Page Measurestratification', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Measurestratification />);
    expect(wrapper).toMatchSnapshot();
  });
});
