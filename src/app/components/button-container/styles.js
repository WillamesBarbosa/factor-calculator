import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${(props) => css`
    flex: ${props.size > 2 ? '70%' : '30%'};
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns:repeat(3, 1fr);
  `}
`;
