import React from "react";
import styled from 'styled-components';

import { useQuery } from "@apollo/client";
import {GET_WORKOUTS_BY_PROGRAM_ID } from "../graphql/queries";

import SmallText from "../elements/SmallText";
import FlexWrapper from "../elements/FlexWrapper";
import DayOverview from "./DayOverview";
import Spinner from "../components/Spinner";

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


/* eslint-disable react/prop-types */
function ScheduleOverview (props) {
const thisID = props.programId;


    const {loading, error, data} = useQuery(GET_WORKOUTS_BY_PROGRAM_ID, {
        variables: { id: thisID }});

    if (loading) return <Spinner />
    if (error) return <p>`Error: ${error.message}`</p>
 
    const workouts = [...data.Program.workouts];
    const sortedWorkouts = workouts.sort((a, b) => {
    if (a.day > b.day) {
        return 1;
      }
      if (a.day < b.day) {
        return -1;
      }
      return 0;
})




    return (
        <SectionDiv>

            <StyledFlexWrapper justify="space-between" align="center">
                <h3>21 Tage</h3>
                <SmallText>Alle anzeigen</SmallText>
            </StyledFlexWrapper>  


            {sortedWorkouts.map((workout) => {
             
return(
    <DayOverview 
    key={workout.day}
    workoutId={workout.Workout._id} 
    programSlug={data.Program.slug.current}
    day={workout.day}
    calories={workout.Workout.calories}
    duration={workout.Workout.duration}
    categories={workout.Workout.categories} />
)
    })}

        </SectionDiv>
    )
}

export default ScheduleOverview;