import React from 'react';
import { shallow } from 'enzyme';

import Contentareas from './';

describe('Page Contentareas', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Contentareas />);
    expect(wrapper).toMatchSnapshot();
  });

  it('handle getChildMeasure check', () => {
    const wrapper = shallow(<Contentareas />);
    const event = {
      target: { type: 'checkbox', checked: true, name: 'getChildMeasure' }
    };
    wrapper.instance().handleInputChange(event);
    expect(wrapper.state()).toMatchObject({ getChildMeasure: true });
  });

  it('handle getMultiMeasure check', () => {
    const wrapper = shallow(<Contentareas />);
    const event = {
      target: { type: 'checkbox', checked: true, name: 'getMultiMeasure' }
    };
    wrapper.instance().handleInputChange(event);
    expect(wrapper.state()).toMatchObject({ getMultiMeasure: true });
  });
});
