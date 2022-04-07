import * as React from 'react';
import 'normalize.css';
import { v4 as uuidv4 } from 'uuid';
import { ListItem } from './components/ListItem/ListItem';
import { Wrapper, Panel, StyledUl } from './App.styled';
import { Input } from './components/Input/Input';
import { Button } from './components/Button/Button';
import { ListItemType } from './types/ListItem';

const initialState: ListItemType[] = [];
const initialInputValue = '';

export const App = () => {
  const [state, setState] = React.useState<ListItemType[]>(initialState);
  const [inputValue, onChangeInput] = React.useState(initialInputValue);

  const addNewItem = React.useCallback(() => {
    if (inputValue.trim() === '') return;

    const newItem = { text: inputValue, isDone: false, id: uuidv4() };
    const newState = [...state, newItem];
    setState(newState);
    onChangeInput(initialInputValue);
  }, [state, inputValue]);

  const markItem = React.useCallback(
    (id: string) => {
      setState(state.map((item) => (item.id === id ? { ...item, isDone: !item.isDone } : item)));
    },
    [state]
  );

  const removeItem = React.useCallback(
    (id: string) => {
      setState(state.filter((item) => item.id !== id));
    },
    [state]
  );

  return (
    <Wrapper>
      <Panel>
        <Input onChange={onChangeInput} value={inputValue} />
        <Button onClick={addNewItem} text="Add" />
      </Panel>
      {state.length === 0 ? null : (
        <Panel>
          <StyledUl>
            {state.map((item) => (
              <ListItem item={item} markItem={markItem} key={item.id} removeItem={removeItem} />
            ))}
          </StyledUl>
        </Panel>
      )}
    </Wrapper>
  );
};
