import styled from 'styled-components';

export const Item = styled.li`
  list-style: none;
  padding: 4px 8px;
  border-bottom: 2px solid #c6c6c6;
`;

interface Text {
  readonly isDone: boolean;
}

export const Text = styled.span<Text>`
  cursor: pointer;
  word-break: break-word;
  padding: 4px 0;
  width: 100%;
  display: inline-flex;

  ${({ isDone }) => isDone && `text-decoration: line-through;`}
`;
