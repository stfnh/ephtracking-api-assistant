import React from 'react';
import { shallow } from 'enzyme';

import Indicators from './';

describe('Page Indicators', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Indicators />);
    expect(wrapper).toMatchSnapshot();
  });
});
