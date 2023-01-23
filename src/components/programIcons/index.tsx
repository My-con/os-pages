import { ProgramIconStyle } from "./style";

export default function ProgramIcon(props : { img: string }){

    return(
        <ProgramIconStyle>
            <img src={props.img} alt="" />
        </ProgramIconStyle>
    )
}