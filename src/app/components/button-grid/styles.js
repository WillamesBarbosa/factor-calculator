import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${(props) => css`
    flex: ${props.flex};
    display: grid;
    grid-template-columns: ${props.format}
  `}
`;
