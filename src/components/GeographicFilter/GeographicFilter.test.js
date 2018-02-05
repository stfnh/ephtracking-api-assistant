import React from 'react';
import GeographicFilter from './';
import { shallow } from 'enzyme';

describe('County FIPS Component', () => {
  const measureId = '585'; // Percent of adults ever diagnosed with asthma (2011 and onwards)
  const geographicTypeId = '1'; // state
  it('renders correctly', () => {
    const handleSelect = jest.fn();
    const wrapper = shallow(
      <GeographicFilter
        measureId={measureId}
        geographicTypeId={geographicTypeId}
        handleSelect={handleSelect}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
