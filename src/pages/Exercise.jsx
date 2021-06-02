import React from "react";
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

import { useQuery } from "@apollo/client";
import {GET_EXERCISE_BY_ID} from "../graphql/queries";

import SmallText from "../elements/SmallText";
import FlexWrapper from "../elements/FlexWrapper";
import Chain from "../icons/Chain";
import Timer from "../components/Timer";
import Counter from "../components/Counter";
import Spinner from "../components/Spinner";


const StyledDiv = styled.div`
position: relative;
background: var(--color-green-mint);
height: 100vh;
width: 100%;
margin-left: auto;
margin-right: auto;
padding: 25px 17px 0 17px; 

`
const StyledChain = styled(Chain)`
margin-top: 35px;
`

/* eslint-disable react/prop-types */

function Exercise (props) {
    const exerciseId = props.match.params.exerciseId;
    const exerciseType = props.match.params.exerciseType;
    const repsDuration = props.match.params.repsDuration;
    console.log(exerciseId);
    console.log(exerciseType);
    console.log(repsDuration);

    const {loading, error, data} = useQuery(GET_EXERCISE_BY_ID, {
        variables: { id: exerciseId }});
        if (loading) return <Spinner />
        if (error) return <p>`Error: ${error.message}`</p>
        console.log(data);

        let history = useHistory();

    return (
        <StyledDiv>
            <FlexWrapper justify="center">
         <button onClick={() => history.goBack()}>
         <SmallText>beenden</SmallText>
         </button>
                
            
            </FlexWrapper>

          
            <StyledChain />
{ (exerciseType === "ExerciseWithReps") ? <Counter reps={repsDuration} /> : <Timer duration={repsDuration} /> }

            
          
            
            <FlexWrapper justify="center" align="center">
                <h1>{data.Exercise.title}</h1>
            </FlexWrapper>
                
        </StyledDiv>
    )
}

export default Exercise;