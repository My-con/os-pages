import { ThemeProvider } from "styled-components";
import Navfavorites from "../../components/navFavorites";
import NavSystem from "../../components/navSystem";
import { SystemStyle } from "../../global/theme/system";
import Principal from "../principal";
import { Container } from "./style";

export default function Home <Page> (){

    document.title = "Fedora OS"

    return (
        <ThemeProvider theme={SystemStyle}>
            <Container>
                <NavSystem />
                <Principal />
                <Navfavorites/>
            </Container>
        </ThemeProvider>
    )
}