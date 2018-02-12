import React from 'react';
import { shallow } from 'enzyme';

import GetCoreHolder from './';

describe('Page GetCoreHolder', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<GetCoreHolder />);
    expect(wrapper).toMatchSnapshot();
  });

  it('sets geographicFilter correctly', () => {
    const wrapper = shallow(<GetCoreHolder />);
    const filter = {
      geographicTypeIdFilter: '12',
      geographicItemsFilter: ['GA', 'FL']
    };
    wrapper.instance().setGeographicFilter(filter);
    expect(wrapper.state().geographicTypeIdFilter).toBe(
      filter.geographicTypeIdFilter
    );
    expect(wrapper.state().geographicItemsFilter).toEqual(
      filter.geographicItemsFilter
    );
  });

  it('sets years correctly', () => {
    const wrapper = shallow(<GetCoreHolder />);
    wrapper.instance().setYears(['2001', '2003']);
    expect(wrapper.state().years).toEqual(['2001', '2003']);
  });

  it('set stratificationLevelId correclty', () => {
    const wrapper = shallow(<GetCoreHolder />);
    wrapper.instance().setStratificationLevelId('32', 'ageGroup=1');
    expect(wrapper.state()).toMatchObject({
      stratificationLevelId: '32',
      queryParams: 'ageGroup=1'
    });
  });

  it('sets measureId correctly and resets state', () => {
    const wrapper = shallow(<GetCoreHolder />);
    wrapper.instance().setMeasureId('123');
    expect(wrapper.state()).toMatchObject({
      measureId: '123',
      geographicTypeId: null,
      stratificationLevelId: null,
      years: [],
      geographicTypeIdFilter: 'ALL',
      geographicItemsFilter: 'ALL',
      queryParams: ''
    });
  });

  it('set geographicTypeId correctly', () => {
    const wrapper = shallow(<GetCoreHolder />);
    wrapper.instance().setGeographicTypeId('1');
    expect(wrapper.state()).toMatchObject({
      geographicTypeId: '1',
      stratificationLevelId: null,
      geographicTypeIdFilter: 'ALL',
      geographicItemsFilter: 'ALL',
      queryParams: ''
    });
  });

  it('can handle input change', () => {
    const wrapper = shallow(<GetCoreHolder />);
    const event = {
      target: {
        name: 'getChildMeasure',
        checked: true,
        type: 'checkbox'
      }
    };
    wrapper.instance().handleInputChange(event);
    expect(wrapper.state().getChildMeasure).toBe(true);
  });
});
