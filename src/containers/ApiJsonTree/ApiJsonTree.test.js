import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import MockAdaptor from 'axios-mock-adapter';

import ApiJsonTree from './';

describe('ApiJsonTree Container', () => {
  const url = 'https://ephtracking.cdc.gov/apigateway/api/v1/getMeasures';

  it('renders correctly', () => {
    const mock = new MockAdaptor(axios);
    mock.onGet(url).reply(200, {
      data: [{ id: 1, name: 'Asthma' }]
    });
    const wrapper = shallow(<ApiJsonTree url={url} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('shows error message', async () => {
    const mock = new MockAdaptor(axios);
    mock.onGet(url).networkError();
    console.error = jest.fn();
    const wrapper = shallow(<ApiJsonTree url={url} />);
    await wrapper.instance().getData(url);
    wrapper.update();
    expect(wrapper.state().isLoading).toBe(false);
    expect(
      wrapper.contains(
        <div className="notification is-danger">Network Error</div>
      )
    ).toBe(true);
    expect(console.error).toHaveBeenCalled();
  });

  it('updates the url only if new props.url', () => {
    const wrapper = shallow(<ApiJsonTree url={url} />);
    wrapper.instance().getData = jest.fn();
    expect(wrapper.instance().getData).not.toHaveBeenCalled();
    const newUrl = 'https://www.cdc.gov';
    wrapper.setProps({ url: newUrl });
    expect(wrapper.instance().getData).toHaveBeenCalledTimes(1);
    // same url, should not be called again
    wrapper.setProps({ url: newUrl });
    expect(wrapper.instance().getData).toHaveBeenCalledTimes(1);
  });
});
