import React from 'react';
import { shallow } from 'enzyme';

import GetGeographicLevels from './';

describe('Page GetGeographicLevels', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<GetGeographicLevels />);
    expect(wrapper).toMatchSnapshot();
  });

  it('sets measureId correctly', () => {
    const wrapper = shallow(<GetGeographicLevels />);
    wrapper.instance().setMeasureId('333');
    expect(wrapper.state()).toMatchObject({ measureId: '333' })
  });
});
