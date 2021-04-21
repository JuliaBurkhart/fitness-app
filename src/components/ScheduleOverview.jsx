import React from "react";
import styled from 'styled-components';
import SmallText from "../elements/SmallText";
import FlexWrapper from "../elements/FlexWrapper";
import DayOverview from "./DayOverview"

const SectionDiv = styled.div`
background: var(--color-beige);
padding: 35px 20px 112px 20px;
`

const StyledFlexWrapper = styled(FlexWrapper)`
margin-bottom: 18px;

& h3 {
    display: inline-block;
}
`

function ScheduleOverview () {
    return (
        <SectionDiv>

            <StyledFlexWrapper justify="space-between" align="center">
                <h3>21 Tage</h3>
                <SmallText>Alle anzeigen</SmallText>
            </StyledFlexWrapper>  

           <DayOverview />
           <DayOverview />
           <DayOverview />
           <DayOverview />
           <DayOverview />

        </SectionDiv>
    )
}

export default ScheduleOverview;