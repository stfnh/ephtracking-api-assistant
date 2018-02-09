import React from 'react';
import { shallow } from 'enzyme';

import Stratificationlevel from './';

describe('Page Stratificationlevel', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Stratificationlevel />);
    expect(wrapper).toMatchSnapshot();
  });

  it('sets measureId correctly', () => {
    const wrapper = shallow(<Stratificationlevel />);
    wrapper.instance().setMeasureId('333');
    expect(wrapper.state()).toMatchObject({ measureId: '333' });
  });

  it('sets geographicTypeId correctly', () => {
    const wrapper = shallow(<Stratificationlevel />);
    wrapper.instance().setGeographicTypeId('2');
    expect(wrapper.state()).toMatchObject({ geographicTypeId: '2' });
  });

  it('handles isSmoothed check', () => {
    const wrapper = shallow(<Stratificationlevel />);
    const event = {
      target: { type: 'checkbox', checked: true, name: 'isSmoothed' }
    };
    wrapper.instance().handleInputChange(event);
    expect(wrapper.state()).toMatchObject({ isSmoothed: true });
  });
});
