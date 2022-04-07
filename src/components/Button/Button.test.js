import * as React from 'react';
import renderer from 'react-test-renderer';
import { Button } from './Button';
import { RemoveIcon } from '../ListItem/RemoveIcon';

it('Button renders correctly', () => {
  const tree = renderer.create(<Button text="Text Button" onClick={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Button with icon renders correctly', () => {
  const tree = renderer.create(<Button icon={<RemoveIcon />} onClick={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Button with text and icon renders correctly', () => {
  const tree = renderer.create(<Button text="Button name" icon={<RemoveIcon />} onClick={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});
