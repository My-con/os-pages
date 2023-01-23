import styled from "styled-components";

export const ProgramIconStyle = styled.div`

    height: 8vh;
    width: 8vh;

    margin: 10px;
    border-radius: 15px;

    display: flex;
    align-items: center;
    justify-content: center;

    :hover{
        background: ${props => props.theme.color.optionColor.primary}
    }

    img{
        height: 90%
    }
`