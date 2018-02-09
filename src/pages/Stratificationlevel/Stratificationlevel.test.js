import React from 'react';
import { shallow } from 'enzyme';

import Stratificationlevel from './';

describe('Page Stratificationlevel', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Stratificationlevel />);
    expect(wrapper).toMatchSnapshot();
  });
});
