import React from 'react';
import Definition from './';
import renderer from 'react-test-renderer';

describe('Defintion Component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Definition>this is a definition</Definition>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
