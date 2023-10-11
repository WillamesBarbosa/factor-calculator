import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    flex: 25%;
    display: flex;
    flex-direction: row;
  `}
`;

export const Statement = styled.p`
  flex: 30%;
  color: rgba(129, 129, 129, 1);
  font-family: 'Poppins', sans-serif;
`;
export const Value = styled.p`
  flex: 70%;
  text-align: right;
  font-family: 'Poppins', sans-serif;
`;
