import React from "react";

import styled from 'styled-components';

import XClose from "../components/XClose";
import ProgramProperties from "../components/ProgramProperties";
import ProgramPieChart from "../components/ProgramPieChart";

const StyledTitleDiv = styled.div`
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

const StyledFlexWrapper = styled.div`

    position: absolute;
    bottom: 21px;
    left: 0;
    width: 100vw;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
`

const StyledTextDiv = styled.div`
background: var(--color-beige);
padding: 20px 24px 17px 24px;
`


const programDescription = "Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans. Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen.";



function Program () {
    return(
        < >
        <StyledTitleDiv>

            <XClose />
            <h1>Titel des Programms</h1>

            <StyledFlexWrapper>
                <ProgramProperties text="abnehmen" />
                <ProgramProperties text="leicht" />
                <ProgramProperties text="6 Wochen" />
            </StyledFlexWrapper>
      
        </StyledTitleDiv>

        <StyledTextDiv>
            <p>{programDescription}</p>
        </StyledTextDiv>
        
        <ProgramPieChart />

        </>
    )
}

export default Program;