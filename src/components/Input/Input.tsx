import * as React from 'react';
import { StyledInput } from './Input.styled';

interface Props {
  value: string;
  placeholder: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

export const Input: React.FC<Props> = ({ onChange, value, placeholder }) => (
  <StyledInput
    onChange={(event) => onChange(event.currentTarget.value)}
    value={value}
    type="text"
    placeholder={placeholder}
  />
);
