import React from 'react';
import { shallow } from 'enzyme';

import Geographiclevels from './';

describe('Page Geographiclevels', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Geographiclevels />);
    expect(wrapper).toMatchSnapshot();
  });

  it('sets meausreId correctly', () => {
    const wrapper = shallow(<Geographiclevels />);
    wrapper.instance().setMeasureId('333');
    expect(wrapper.state()).toMatchObject({ measureId: '333' });
  });
});
