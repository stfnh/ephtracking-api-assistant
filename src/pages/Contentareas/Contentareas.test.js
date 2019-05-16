import React from 'react';
import { shallow } from 'enzyme';

import Contentareas from './';

describe('Page Contentareas', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Contentareas />);
    expect(wrapper).toMatchSnapshot();
  });
});
