import styled from "styled-components";

type PopWindowType = {
    width: string,
    height: string,
    x: string,
    y: string
}

export const PopWindowStyle = styled.div<PopWindowType>`
    width: ${ props => props.width };
    height: ${ props  => props.height };

    background: ${ props => props.theme.color.secundary };

    border-radius: 15px;

    z-index: 2;

    position: absolute;
    left: ${ props => props.x };
    top: calc( ${ props => props.y } + 40px);
`