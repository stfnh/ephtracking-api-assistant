import React from 'react';
import CodeBlock from '.';
import renderer from 'react-test-renderer';

describe('CodeBlock Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<CodeBlock>Hello, World</CodeBlock>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
