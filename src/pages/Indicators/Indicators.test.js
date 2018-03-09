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

  it('can handle input change', () => {
    const wrapper = shallow(<Indicators />);
    const event = {
      target: {
        name: 'getChildMeasure',
        checked: true,
        type: 'checkbox'
      }
    };
    wrapper.instance().handleInputChange(event);
    expect(wrapper.state().getChildMeasure).toBe(true);
  });
});
