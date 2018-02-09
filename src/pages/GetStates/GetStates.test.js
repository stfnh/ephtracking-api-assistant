import React from 'react';
import { shallow } from 'enzyme';

import GetStates from './';

describe('Page GetStates', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<GetStates />);
    expect(wrapper).toMatchSnapshot();
  });

  it('sets measureId correctly', () => {
    const wrapper = shallow(<GetStates />);
    wrapper.instance().setMeasureId('333');
    expect(wrapper.state()).toMatchObject({ measureId: '333' });
  });
});
