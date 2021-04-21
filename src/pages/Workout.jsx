import React from "react";
import styled from 'styled-components';

import SmallText from "../elements/SmallText";
import ArrowBack from "../elements/ArrowBack";
import Button from "../elements/Button";


const StyledDiv = styled.div`
position: relative;
background: var(--gradient-yellow-rose);
width: 100vw;
`
const StyledFlexWrapper = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

& h1 {
    margin-bottom: 40px;
}
`

const StyledButton = styled(Button)`
position: absolute;
bottom: 99px;
left: 168px;
width: 77px;
height: 45px;
`

function Workout () {
    return (
        <StyledDiv>
            <SmallText>Titel des Programms</SmallText>
            <ArrowBack />

            <StyledFlexWrapper>
                <h1>Tag 1</h1>
                <SmallText>XXX kcal · 26 Min. · Beweglichkeit</SmallText>
            </StyledFlexWrapper>
    
            <StyledButton>los!</StyledButton>

        </StyledDiv>
    )
}

export default Workout;