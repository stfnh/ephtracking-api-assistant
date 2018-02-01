import React from 'react';
import CIM from '.';
import { shallow } from 'enzyme';

describe('CIM Component', () => {
  it('renders correctly', () => {
    const handleSelect = event => console.log('handleSelect');
    const tree = shallow(<CIM handleSelect={handleSelect} />);
    expect(tree).toMatchSnapshot();
  });

});
