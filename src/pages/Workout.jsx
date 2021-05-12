import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

import { GET_WORKOUT_BY_ID } from "../graphql/queries";
import { useQuery } from "@apollo/client";

import Spinner from "../components/Spinner";
import SmallText from "../elements/SmallText";
import FlexWrapper from "../elements/FlexWrapper";
import ArrowBack from "../elements/ArrowBack";
import Button from "../elements/Button";
import Chain from "../icons/Chain";


const StyledDiv = styled.div`
position: relative;
background: var(--gradient-yellow-rose);
width: 100vw;
padding-top: 25px; 
padding-left: 17px;
`
const StyledFlexWrapper = styled(FlexWrapper)`
height: 100vh;
width: 100vw;

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
const Wrapper = styled.div`
position: absolute;
top: 23px;
right: 18px;
`
const StyledChain = styled(Chain)`
margin-top: 35px;
`
/* eslint-disable react/prop-types */

function Workout (props) {
    console.log(props.match.params);
   const thisID = props.match.params.workoutId;
   const programSlug = props.match.params.programSlug;
   const thisDay = props.match.params.day;

    const { data, loading, error } = useQuery(GET_WORKOUT_BY_ID, {
        variables: { id: thisID }});
    if (loading) return <Spinner />;
    if (error) return <p>`Error: ${error.message}`</p>
    console.log(data);


    return (
        <StyledDiv>
            <FlexWrapper justify="center">
                <SmallText>{programSlug}</SmallText>
            </FlexWrapper>

            <Wrapper>
                <ArrowBack />
            </Wrapper>
          
            <StyledChain />

            <StyledFlexWrapper column justify="center" align="center">
                <h1>Tag {thisDay}</h1>
                <SmallText>{data.Workout.calories} kcal · {data.Workout.duration} Min. · {data.Workout.categories}</SmallText>
            </StyledFlexWrapper>

            <Link to="/exercise">
            <StyledButton>los!</StyledButton>
            </Link>
            
        </StyledDiv>
    )
}

export default Workout;