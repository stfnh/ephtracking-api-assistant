import React from 'react';
import CodeBlock from '.';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<CodeBlock>Hello, World</CodeBlock>).toJSON();
  expect(tree).toMatchSnapshot();
});
