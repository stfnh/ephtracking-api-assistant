import React from 'react';
import { shallow } from 'enzyme';

import Measures from './';

describe('Page Measures', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Measures />);
    expect(wrapper).toMatchSnapshot();
  });

  it('sets contentAreaId correctly', () => {
    const wrapper = shallow(<Measures />);
    wrapper.instance().setContentAreaId('123');
    expect(wrapper.state().contentAreaId).toBe('123');
  });

  it('sets indicatorId correctly', () => {
    const wrapper = shallow(<Measures />);
    wrapper.instance().setIndicatorId('123');
    expect(wrapper.state().indicatorId).toBe('123');
  });

  it('can handle input change', () => {
    const wrapper = shallow(<Measures />);
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
