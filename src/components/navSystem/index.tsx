import { ThemeProvider } from "styled-components";
import networkicon from "../../assets/network.svg"
import powericon from "../../assets/power.svg"
import volumeicon from "../../assets/volume.svg"
import { ButtomSystemStyled } from "../buttomSystem/style";
import { NavSystemStyle } from "./style";
import { SystemStyle } from "../../global/theme/system";
import { useState } from "react";

export default function NavSystem() {

    let [Timer, useTimer] = useState(new Date().toLocaleDateString('PT-br', { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }))
    let [pops, setpops]: any = useState()



    function showpop() {
        const options = document.getElementById("timer")
        setpops( pops = ""  )
        console.log( options?.getBoundingClientRect().x)
    }

    setInterval(() => {
        useTimer(Timer = new Date().toLocaleDateString('PT-br', { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }))
    }, 30000)

    return (
        <ThemeProvider theme={SystemStyle}>

            <NavSystemStyle>
                { pops }
                <ButtomSystemStyled>
                    <p>
                        Atividades
                    </p>
                </ButtomSystemStyled>

                <ButtomSystemStyled id="timer" onClick={showpop}>
                    {Timer}
                </ButtomSystemStyled>

                <ButtomSystemStyled id="options" >
                    <img src={networkicon} alt="" />
                    <img src={volumeicon} alt="" />
                    <img src={powericon} alt="" />
                </ButtomSystemStyled>
            </NavSystemStyle>
        </ThemeProvider>
    )
}