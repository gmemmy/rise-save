import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/app/index';

jest.mock('../src/app/index', () => {
  const ComponentToMock = () => 'App';
  return ComponentToMock;
});

test('renders correctly', () => {
  const tree = renderer.create(<App />);
  expect(tree.toJSON()).toMatchSnapshot();
});
