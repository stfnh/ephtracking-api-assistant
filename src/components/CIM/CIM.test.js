import React from 'react';
import CIM from '.';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const handleSelect = event => console.log('handleSelect');
  const tree = renderer.create(<CIM handleSelect={handleSelect} />).toJSON();
  expect(tree).toMatchSnapshot();
});
