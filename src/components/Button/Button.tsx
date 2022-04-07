import * as React from 'react';
import { ButtonStyled } from './Button.styled';

interface Props {
  text?: string;
  icon?: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<Props> = React.memo(({ onClick, text, icon }) => (
  <ButtonStyled onClick={onClick}>
    {icon}
    {text}
  </ButtonStyled>
));
