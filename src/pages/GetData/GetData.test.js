import React from 'react';
import { shallow } from 'enzyme';

import GetData from './';

describe('Page GetData', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<GetData />);
    expect(wrapper).toMatchSnapshot();
  });

  it('sets measureId correctly', () => {
    const wrapper = shallow(<GetData />);
    wrapper.instance().setMeasureId('123');
    expect(wrapper.state().measureId).toBe('123');
  });

  it('handles stateSelect correctly', () => {
    const wrapper = shallow(<GetData />);
    wrapper.instance().handleStateSelect(['01', '02', '04']);
    expect(wrapper.state().states).toEqual(['01', '02', '04']);
  });

  it('handles year select correctly', () => {
    const wrapper = shallow(<GetData />);
    wrapper.instance().handleYearSelect('2012');
    expect(wrapper.state().year).toEqual('2012');
  });


  it('can handle input change', () => {
    const wrapper = shallow(<GetData />);
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
