import React from "react";

import styled from 'styled-components';

import XClose from "../elements/XClose";
import Button from "../elements/Button";
import FlexWrapper from "../elements/FlexWrapper";
import ProgramProperties from "../components/ProgramProperties";
import ProgramPieChart from "../components/ProgramPieChart";
import ScheduleOverview from "../components/ScheduleOverview";


const TitleDiv = styled.div`
background: var(--gradient-yellow-rose);
position: relative;
height: 540px;
    display: flex;
    justify-content: center;
    align-items: center;

& h1 {
    padding: 42px 34px 0 34px;
    text-align: center;
}
`


const StyledFlexWrapper = styled(FlexWrapper)`

    position: absolute;
    bottom: 21px;
    left: 0;
    width: 100vw;
`

const TextDiv = styled.div`
background: var(--color-beige);
padding: 20px 24px 17px 24px;
position: relative;
`
const StyledButton = styled(Button)`
width: 147px;
height: 45px;
position: absolute;
top: 119px;
left: 139px;
`

const programDescription = "Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans. Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen.";



function Program () {
    return(
        < >
        <TitleDiv>

            <XClose />
            <h1>Titel des Programms</h1>

            <StyledFlexWrapper justify="space-around">
                <ProgramProperties text="abnehmen" />
                <ProgramProperties text="leicht" />
                <ProgramProperties text="6 Wochen" />
            </StyledFlexWrapper>
      
        </TitleDiv>

        <TextDiv>
            <p>{programDescription}</p>
            <StyledButton>jetzt starten</StyledButton>
        </TextDiv>
        
        <ProgramPieChart />

        <ScheduleOverview />

        </>
    )
}

export default Program;