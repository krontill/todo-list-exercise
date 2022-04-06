import * as React from 'react';
import { StyledInput } from './Input.styled';

interface Props {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

export const Input: React.FC<Props> = ({ onChange, value }) => (
  <StyledInput
    onChange={(event) => onChange(event.currentTarget.value)}
    value={value}
    type="text"
    placeholder="Task to be done..."
  />
);
