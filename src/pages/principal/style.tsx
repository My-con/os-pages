import styled from "styled-components";

export const PrincipalStyle = styled.div`
    width: 75%;
    height: 80%;
    
    margin: auto;

    border-radius: 50px;

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url("${props => props.theme.background}");
`