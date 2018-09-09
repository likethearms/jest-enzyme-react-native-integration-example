import React from 'react';
import { shallow } from 'enzyme'
import App from './App';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

it('renders correctly', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('Text').length).toEqual(3);
})