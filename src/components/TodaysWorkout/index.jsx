import React from "react";
import styled from 'styled-components';

import { GET_WORKOUT_BY_ID } from "../../graphql/queries";
import {GET_PROGRAM_BY_ID } from "../../graphql/queries";
import { useQuery } from "@apollo/client";

import Spinner from "../../components/Spinner";
import titlepic from "./images/titlepic.png";
import SmallText from "../../elements/SmallText";
import FlexWrapper from "../../elements/FlexWrapper";

const SectionDiv = styled.div`
padding: 53px 20px 0 20px;
& h2 {
display: inline-block;
}
`

const ImgBox = styled.div`
margin-top: 10px;
background-color: var(--color-beige);
border-radius: 5px;
width: 375px;
height: 214px;
position: relative;
overflow: hidden;

& img {
position: absolute;
left: 50px;
bottom: 12px;
width: 297px;
}
`

const DescriptionBox = styled.div`
padding-top: 10px;
`

function TodaysWorkout () {

    // später ersetzen wenn es tatsächlich gespeicherte User-Infos gibt:
    const todaysWorkoutId = "dd3e2b36-5eed-41d4-9733-1e464049ab75";
    const todaysWorkoutProgramId = "078f930d-a67d-4016-ad6d-797e38804e3e";

    const { data, loading, error } = useQuery(GET_WORKOUT_BY_ID, {
        variables: { id: todaysWorkoutId }});
    
    const {loading: loadingP, error: errorP, data: dataP} = useQuery(GET_PROGRAM_BY_ID, {
        variables: { id: todaysWorkoutProgramId }});

    if (loading || loadingP) return <Spinner />;
    if (error || errorP) return <p>`Error. We have problems with loading the data. Sorry!`</p>

    return (
        <SectionDiv>
            <FlexWrapper justify="space-between" align="center">
                <h2>Dein Workout heute</h2>
                <SmallText>Trainingsplan</SmallText>
            </FlexWrapper>
          
           <ImgBox>
               <img src={titlepic} alt=""/>
            </ImgBox>
           
           <DescriptionBox>
                <p>{data.Workout.title}</p>
                <p>{dataP.Program.title}</p>
                <span>{data.Workout.calories} kcal · {data.Workout.duration} Min. · {data.Workout.categories.map((categorie) => categorie + " ")}</span>
            </DescriptionBox>
        </SectionDiv>
    )
}

export default TodaysWorkout;