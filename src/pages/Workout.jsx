import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

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
height: 100vh;
width: 100%;
margin-left: auto;
margin-right: auto;
padding-top: 25px; 
padding-left: 17px;
padding-right: 17px;
padding-bottom: 99px;
text-align: center;
`
const StyledFlexWrapper = styled(FlexWrapper)`
height: 100%;
width: 100%;
/* max-width: 414px; */
margin: 0 auto 0 auto;

& h1 {
    margin-bottom: 40px;
}
`
const ButtonWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
/* max-width: 414px; */
margin: 0 auto 0 auto;
position: absolute;
bottom: 99px;
left: 0;
`

const StyledButton = styled(Button)`

`
const Wrapper = styled.button`
cursor: pointer;
position: absolute;
top: 23px;
right: 18px;
`
const StyledChain = styled(Chain)`
margin-top: 35px;
`
/* eslint-disable react/prop-types */

function Workout (props) {
   const thisID = props.match.params.workoutId;
   const programTitle = convertSlugToText(props.match.params.programSlug);
   const thisDay = props.match.params.day;

   function convertSlugToText(slug) {
return slug.split('-').map(word => word.replace(/^./, word[0].toUpperCase())).join(' ');
   }
   
    const { data, loading, error } = useQuery(GET_WORKOUT_BY_ID, {
        variables: { id: thisID }});
    if (loading) return <Spinner />;
    if (error) return <p>`Error: ${error.message}`</p>
console.log(data);
const firstTypename = data.Workout.exercises[0].__typename;
const firstId = data.Workout.exercises[0].exercise._id;

const repsDuration =  (firstTypename === "ExerciseWithReps") ? data.Workout.exercises[0].reps : data.Workout.exercises[0].duration


    let history = useHistory();

    return (
        <StyledDiv>
            <FlexWrapper justify="center">
                <SmallText>{programTitle}</SmallText>
            </FlexWrapper>

            <Wrapper onClick={() => history.goBack()}>
                <ArrowBack />
            </Wrapper>
          
            <StyledChain />

            <StyledFlexWrapper column justify="center" align="center">
                <h1>Tag {thisDay}</h1>
                <h3>{data.Workout.title}</h3>
                <SmallText>{data.Workout.calories} kcal · {data.Workout.duration} Min. · {data.Workout.categories}</SmallText>
               
                
            </StyledFlexWrapper>
<ButtonWrapper>

<Link to={{
            pathname: `/exercise/${firstTypename}/${firstId}/${repsDuration}`,
            }}>

            <StyledButton>los!</StyledButton>
            </Link>
</ButtonWrapper>
          
            
        </StyledDiv>
    )
}

export default Workout;