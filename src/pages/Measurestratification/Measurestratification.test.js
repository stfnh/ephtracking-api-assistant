import React from 'react';
import { shallow } from 'enzyme';

import Measurestratification from './';

describe('Page Measurestratification', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Measurestratification />);
    expect(wrapper).toMatchSnapshot();
  });

  it('sets measureId correctly', () => {
    const wrapper = shallow(<Measurestratification />);
    wrapper.instance().setMeasureId('123');
    expect(wrapper.state().measureId).toBe('123');
  });

  it('sets geographicTypeId correctly', () => {
    const wrapper = shallow(<Measurestratification />);
    wrapper.instance().setGeographicTypeId('123');
    expect(wrapper.state().geographicTypeId).toBe('123');
  });

  it('can handle input change', () => {
    const wrapper = shallow(<Measurestratification />);
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
