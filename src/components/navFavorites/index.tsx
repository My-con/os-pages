import ProgramIcon from "../programIcons"
import firefox from "../../assets/firefox.svg"
import more from "../../assets/more.svg"


import { NavfavoritesStyle } from "./style"

export default function Navfavorites<page>(){
    return (
        <NavfavoritesStyle>
            <ProgramIcon img={firefox} />
            <ProgramIcon img={more} />
        </NavfavoritesStyle>
    )
}