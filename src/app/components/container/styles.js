import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${(props) => css`
    flex:${props.flex};
    margin: auto;
    display: flex;
    height: ${props.height};
    width: ${props.width};
    flex-direction: ${props.direction};
  `}
`;
