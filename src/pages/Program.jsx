import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";


import { useQuery } from "@apollo/client";
import {GET_PROGRAM_BY_ID } from "../graphql/queries";
import {GET_WORKOUTS_BY_PROGRAM_ID } from "../graphql/queries";

import XClose from "../elements/XClose";
import Button from "../elements/Button";
import FlexWrapper from "../elements/FlexWrapper";
import ProgramProperties from "../components/ProgramProperties";
import PieChartSection from "../components/PieChartSection";
import ScheduleOverview from "../components/ScheduleOverview";
import Spinner from "../components/Spinner";

const TitleDiv = styled.div`
background: var(--gradient-yellow-rose);
position: relative;
height: 540px;
    display: flex;
    justify-content: center;
    align-items: center;

& h1 {
    padding: 42px 34px 0 34px;
    text-align: center;
}
`


const StyledFlexWrapper = styled(FlexWrapper)`

    position: absolute;
    bottom: 21px;
    left: 0;
    width: 100%;
`

const TextDiv = styled.div`
background: var(--color-beige);
padding: 20px 24px 17px 24px;
position: relative;
`
const StyledButton = styled(Button)`
width: 147px;
height: 45px;
position: fixed;
z-index: 1;
bottom: 60px;
left: calc(100vw/2 - 73.5px);
`





/* eslint-disable react/prop-types */

function Program (props) {
 const thisID = props.match.params.programId;
const {loading, error, data} = useQuery(GET_PROGRAM_BY_ID, {
    variables: { id: thisID }});
const {loading: loadingW, error: errorW, data: dataW} = useQuery(GET_WORKOUTS_BY_PROGRAM_ID, {
        variables: { id: thisID }});

if (loading) return <Spinner />
if (error) return <p>`Error: ${error.message}`</p>
if (loadingW) return <Spinner />
if (errorW) return <p>`Error: ${errorW.message}`</p>


    return(
        < >
        <TitleDiv>
<Link to="/browse">
<XClose />
</Link>
           
            <h1>{data.Program.title}</h1>

            <StyledFlexWrapper justify="space-around">
                <ProgramProperties text={`${data.Program.focus}`} />
                <ProgramProperties text={`${data.Program.difficulty}`} />
                <ProgramProperties text={`${data.Program.duration} weeks`} />
            </StyledFlexWrapper>
      
        </TitleDiv>

        <TextDiv>
            <p>{data.Program.description}</p>
        </TextDiv>

        <Link to={{
            pathname: `/workout/${dataW.Program.slug.current}/${dataW.Program.workouts[0].Workout._id}/1`,
            key: `${props.workoutId}`,
            }}>
            <StyledButton>jetzt starten</StyledButton>
            </Link>
        
        <PieChartSection programId={thisID}/>

        <ScheduleOverview programId={thisID}/>

        </>
    )
}

export default Program;