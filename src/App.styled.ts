import styled from 'styled-components';

export const Wrapper = styled.main`
  background: linear-gradient(#dc2873, #e66b9e);
  height: 100vh;
  overflow: auto;
  font-family: sans-serif;
  color: black;
`;

export const Panel = styled.div`
  border-radius: 8px;
  background: #fff;
  padding: 20px 16px;
  margin: 40px auto;
  max-width: 320px;
  display: flex;
  justify-content: space-between;

  @media (min-width: 769px) {
    max-width: 540px;
  }
`;

export const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
`;
