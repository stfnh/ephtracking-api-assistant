import React from 'react';
import Sidemenu from './';
import { shallow } from 'enzyme';

describe('County FIPS Component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Sidemenu />);
    expect(wrapper).toMatchSnapshot();
  });
});
