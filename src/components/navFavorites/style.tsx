import styled from "styled-components";

export const NavfavoritesStyle = styled.div`
    wight: auto;
    height: 10%;

    border-radius: 20px;
    margin: auto;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background: ${props => props.theme.color.secundary};
`