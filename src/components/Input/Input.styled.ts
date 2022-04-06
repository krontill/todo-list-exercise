import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 2px solid #c6c6c6;
  outline: none;

  ::placeholder {
    color: #6c6c6c;
  }

  &:focus {
    border-color: #7e55e8;
  }

  @media (min-width: 769px) {
    width: 75%;
  }
`;
