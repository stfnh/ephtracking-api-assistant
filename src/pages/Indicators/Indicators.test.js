import React from 'react';
import { shallow } from 'enzyme';

import Indicators from './';

describe('Page Indicators', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Indicators />);
    expect(wrapper).toMatchSnapshot();
  });

  it('setsContentAreaId correctly', () => {
    const wrapper = shallow(<Indicators />);
    wrapper.instance().setContentAreaId('123');
    expect(wrapper.state().contentAreaId).toBe('123');
  });
});
