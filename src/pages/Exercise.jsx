import React from "react";
import styled from 'styled-components';


import SmallText from "../elements/SmallText";
import FlexWrapper from "../elements/FlexWrapper";
import Chain from "../icons/Chain";
import Timer from "../components/Timer";
import Counter from "../components/Counter";


const StyledDiv = styled.div`
position: relative;
background: var(--color-green-mint);
width: 100vw;
height: 100vh;
padding: 25px 17px 0 17px; 

`
const StyledChain = styled(Chain)`
margin-top: 35px;
`

/* eslint-disable react/prop-types */

function Exercise (props) {
    const exerciseId = props.match.params.exerciseId;
    const exerciseType = props.match.params.exerciseType;
    console.log(exerciseId);
    console.log(exerciseType);
    return (
        <StyledDiv>
            <FlexWrapper justify="center">
                <SmallText>beenden</SmallText>
            </FlexWrapper>

          
            <StyledChain />
{ (exerciseType === "ExerciseWithReps") ? <Counter /> : <Timer /> }

            
          
            
            <FlexWrapper justify="center" align="center">
                <h1>{exerciseId}</h1>
            </FlexWrapper>
                
        </StyledDiv>
    )
}

export default Exercise;