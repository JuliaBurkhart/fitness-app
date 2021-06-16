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
    const todaysWorkoutId = "1a985d3f-73d5-414c-abac-bee46d5a6a32";
    const todaysWorkoutProgramId = "316cbe28-5676-4e31-a56a-b861bd36f3d1";

    const { data, loading, error } = useQuery(GET_WORKOUT_BY_ID, {
        variables: { id: todaysWorkoutId }});
        console.log(data);
    
    const {loading: loadingP, error: errorP, data: dataP} = useQuery(GET_PROGRAM_BY_ID, {
        variables: { id: todaysWorkoutProgramId }});
        console.log(dataP);

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