import styled from "styled-components";

export const ButtomSystemStyled = styled.div`
    width: min-content;
    height: 85%;

    padding: 0 15px;
    border-radius: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    white-space: nowrap;
    align-text: center;

    background: ${props => props.theme.color.primary};

    :hover{
        background: ${props => props.theme.color.secundary};
    }
`