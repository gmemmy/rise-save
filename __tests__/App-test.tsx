import * as React from 'react';
import renderer from 'react-test-renderer';
import {App} from '../src/app/index';

export const add = (a: number, b: number) => a + b;
describe('add', () => {
  it('should add two numbers', () => {
    expect(add(1, 1)).toEqual(2);
  });
});

describe('<App />', () => {
  it('has one child', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.any.children.length).toBe(1);
  });
});
