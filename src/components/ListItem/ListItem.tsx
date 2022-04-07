import * as React from 'react';
import { Item, Text } from './ListItem.styled';
import { ListItemType } from '../../types/ListItem';
import { Button } from '../Button/Button';
import { RemoveIcon } from './RemoveIcon';

interface Props {
  item: ListItemType;
  markItem: React.Dispatch<React.SetStateAction<string>>;
  removeItem: React.Dispatch<React.SetStateAction<string>>;
}

export const ListItem: React.FC<Props> = React.memo(({ markItem, removeItem, item }) => {
  const { text, isDone, id } = item;

  return (
    <Item>
      <Text isDone={isDone} onClick={() => markItem(id)}>
        {text}
      </Text>
      <Button onClick={() => removeItem(id)} icon={<RemoveIcon />} />
    </Item>
  );
});
