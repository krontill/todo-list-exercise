import * as React from 'react';
import { Item, Text } from './ListItem.styled';
import { ListItemType } from '../../types/ListItem';

interface Props {
  item: ListItemType;
  onClick: React.Dispatch<React.SetStateAction<string>>;
}

export const ListItem: React.FC<Props> = React.memo(({ onClick, item }) => {
  const { text, isDone, id } = item;

  return (
    <Item>
      <Text isDone={isDone} onClick={() => onClick(id)}>
        {text}
      </Text>
    </Item>
  );
});
