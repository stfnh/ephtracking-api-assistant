import React from 'react';
import Preview from './';
import { shallow } from 'enzyme';

describe('Preview Component', () => {
  it('rendes correctly', () => {
    const url =
      'https://ephtracking.cdc.gov/apigateway/api/v1/measures/null/0/0';
    const tree = shallow(<Preview url={url} isValid={false} />);
    expect(tree).toMatchSnapshot();
  });

  // ToDo: test line 20, 21, 50
});
