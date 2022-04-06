import * as React from 'react';
import { ButtonStyled } from './Button.styled';

interface Props {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<Props> = React.memo(({ onClick, text }) => (
  <ButtonStyled onClick={onClick}>{text}</ButtonStyled>
));
