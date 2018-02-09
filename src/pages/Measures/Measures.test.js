import React from 'react';
import { shallow } from 'enzyme';

import Measures from './';

describe('Page Measures', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Measures />);
    expect(wrapper).toMatchSnapshot();
  });
});
