import styled from "styled-components";

export const ButtonContainer = styled.button`
    padding: 10px;
    border: 1px solid white;
    background-color: ${props => props.color ? `${props.color}` : '#f1f3f4'};
    color: black;
    font-weight: 700;
    flex: ${props => props.width ? 'none' : 1};
    width: ${props => props.width ? `${props.width}` : '100%'};
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;