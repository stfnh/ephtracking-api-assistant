import React from 'react';
import { shallow } from 'enzyme';

import Geography from './';

describe('Page Geography', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Geography />);
    expect(wrapper).toMatchSnapshot();
  });

  it('sets meausreId correctly', () => {
    const wrapper = shallow(<Geography />);
    wrapper.instance().setMeasureId('333');
    expect(wrapper.state()).toMatchObject({ measureId: '333' });
  });

  it('set geographicTypeId correctly', () => {
    const wrapper = shallow(<Geography />);
    wrapper.instance().setGeographicTypeId('1');
    expect(wrapper.state()).toMatchObject({ geographicTypeId: '1' });
  });

  it('handles input geographicRollup check correctly', () => {
    const wrapper = shallow(<Geography />);
    const event = {
      target: {
        type: 'checkbox',
        checked: true,
        name: 'geographicRollup'
      }
    };
    wrapper.instance().handleInputChange(event);
    expect(wrapper.state()).toMatchObject({ geographicRollup: true });
  });
});
