import * as React from 'react';
import renderer from 'react-test-renderer';
import { Input } from './Input';

it('Input renders correctly', () => {
  const tree = renderer.create(<Input onChange={() => {}} value="Test value" placeholder="Task to be done..." />).toJSON();
  expect(tree).toMatchSnapshot();
});
