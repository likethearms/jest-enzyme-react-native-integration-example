import React from 'react';
import { Text } from 'react-native'
import { shallow, mount } from 'enzyme'
import App from './App';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

it('renders correctly', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('#test').length).toEqual(1);
})

it('renders #foo correctly', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('#foo').length).toEqual(0);
})