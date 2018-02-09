import React from 'react';
import { shallow } from 'enzyme';

import GetYears from './';

describe('Page GetYears', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<GetYears />);
    expect(wrapper).toMatchSnapshot();
  });

  it('sets measureId correctly', () => {
    const wrapper = shallow(<GetYears />);
    wrapper.instance().setMeasureId('333');
    expect(wrapper.state()).toMatchObject({ measureId: '333' })
  });
});
