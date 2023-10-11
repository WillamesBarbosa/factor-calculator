import styled from 'styled-components';

export const Button = styled.button`
    margin: 5px;
    font-size: 4rem;
    border-radius: 15px;
    border: none;
    background-color: ${(props) => props.backgroundColor};
    color:${(props) => props.color};
    font-family: 'Poppins', sans-serif;
`;
