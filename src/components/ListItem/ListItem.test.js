import * as React from 'react';
import renderer from 'react-test-renderer';
import { ListItem } from './ListItem';

it('ListItem renders correctly', () => {
  const item = {
    id: 'string',
    text: 'string',
    isDone: false,
  };
  const tree = renderer.create(<ListItem item={item} markItem={() => {}} key={'id'} removeItem={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('ListItem is done renders correctly', () => {
  const item = {
    id: 'string',
    text: 'string',
    isDone: true,
  };
  const tree = renderer.create(<ListItem item={item} markItem={() => {}} key={'id'} removeItem={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('ListItem array renders correctly', () => {
  const data = [
    {
      id: 'string1',
      text: 'string1',
      isDone: false,
    },
    {
      id: 'string2',
      text: 'string2',
      isDone: true,
    },
  ];

  const listItems = data.map((item) => (
    <ListItem item={item} markItem={() => {}} key={item.id} removeItem={() => {}} />
  ));

  const tree = renderer.create(listItems).toJSON();
  expect(tree).toMatchSnapshot();
});
