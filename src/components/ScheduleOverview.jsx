import React from "react";
import styled from 'styled-components';
import SmallText from "./SmallText";
import DayOverview from "./DayOverview"

const StyledDiv = styled.div`
background: var(--color-beige);
padding: 35px 20px 112px 20px;
`

const StyledFlexWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 18px;

& h3 {
    display: inline-block;
}
`

function ScheduleOverview () {
    return (
        <StyledDiv>

            <StyledFlexWrapper>
                <h3>21 Tage</h3>
                <SmallText>Alle anzeigen</SmallText>
            </StyledFlexWrapper>

          
        

           <DayOverview />
           <DayOverview />
           <DayOverview />
           <DayOverview />
           <DayOverview />

        </StyledDiv>
    )
}

export default ScheduleOverview;