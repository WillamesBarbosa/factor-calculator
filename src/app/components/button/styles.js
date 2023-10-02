import styled, { css } from 'styled-components';

export const Button = styled.button`
  margin: 0;
`;

export const Container = styled.div`
  ${(props) => css`
    flex: ${props.size > 2 ? '70%' : '30%'};
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: ${props.size > 2 ? 'repeat(3, 1fr)' : 'repeat(1, 1fr)'};
  `}
`;
