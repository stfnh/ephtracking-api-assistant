import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import MockAdaptor from 'axios-mock-adapter';

import SelectStratificationLevel from './';

describe('SelectIndicator Container', () => {
  const mock = new MockAdaptor(axios);
  const stratificationlevelMock = [
    {
      id: 1,
      name: 'State',
      abbreviation: 'ST',
      geographicTypeId: 1,
      stratificationType: []
    },
    {
      id: 3,
      name: 'State x Age',
      abbreviation: 'ST_AG',
      geographicTypeId: 1,
      stratificationType: [
        {
          id: 3,
          name: 'Age Group',
          abbreviation: 'AG',
          columnName: 'AgeBandId'
        }
      ]
    }
  ];
  const measurestratificationMock = [
    {
      displayName: 'Age Group',
      isDisplayed: true,
      isRequired: false,
      isGrouped: false,
      isStratificationSelectable: false,
      stratificationItem: [
        {
          name: '18 to 24',
          longName: '18 to 24',
          isDefault: false,
          useLongName: false,
          localId: 1
        },
        {
          name: '25 to 34',
          longName: '25 to 34',
          isDefault: false,
          useLongName: false,
          localId: 2
        },
        {
          name: '35 to 44',
          longName: '35 to 44',
          isDefault: false,
          useLongName: false,
          localId: 3
        },
        {
          name: '45 to 54',
          longName: '45 to 54',
          isDefault: false,
          useLongName: false,
          localId: 4
        },
        {
          name: '55 to 64',
          longName: '55 to 64',
          isDefault: false,
          useLongName: false,
          localId: 5
        },
        {
          name: '65 or older',
          longName: '65 or older',
          isDefault: false,
          useLongName: false,
          localId: 6
        }
      ],
      columnName: 'AgeBandId',
      stratificationTypeId: 3
    }
  ];

  it('renders correctly', async () => {
    mock.reset();
    mock
      .onGet(/\/stratificationlevel\//)
      .reply(200, stratificationlevelMock)
      .onGet(/\/measurestratification\//)
      .reply(200, measurestratificationMock);
    const handleSelect = jest.fn();
    // render without contentAreaId
    const wrapper = shallow(
      <SelectStratificationLevel handleSelect={handleSelect} />
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ measureId: '333', geographicTypeId: '1' });
    await wrapper.instance().getOptions('333', '1');
    expect(wrapper).toMatchSnapshot();
  });

  it('logs an error message on network error', async () => {
    mock.reset();
    mock.onAny().networkError();
    const handleSelect = jest.fn();
    console.error = jest.fn();
    const wrapper = shallow(
      <SelectStratificationLevel handleSelect={handleSelect} />
    );
    await wrapper.instance().getOptions('333', '3');
    expect(console.error).toHaveBeenCalled();
  });

  it('handles stratification level change', () => {
    const handleSelect = jest.fn();
    const wrapper = shallow(
      <SelectStratificationLevel handleSelect={handleSelect} />
    );
    wrapper.instance().setParameterOptions = jest.fn();
    wrapper.setState({ checked: ['AL', 'GA'] });
    wrapper.update();
    wrapper.instance().handleChange({ target: { value: '32' } });
    expect(handleSelect).toHaveBeenCalledWith('32');
    expect(wrapper.state()).toHaveProperty('value', '32');
  });
});
