import React from "react";
import styled from 'styled-components';

import { useQuery } from "@apollo/client";
import {GET_WORKOUTS_BY_PROGRAM_ID } from "../../graphql/queries";

import calculateValues from "./calculateValues";
import Spinner from "../../components/Spinner";
import FlexWrapper from "../../elements/FlexWrapper";
import MyPieChart from "./PieChart";


const SectionDiv = styled.div`
position: relative;
background-color: var(--color-white);
padding: 30px 20px 30px 20px;
height: 285px;
`
const StyledFlexWrapper = styled(FlexWrapper)`
margin-top: 40px;
`
/* eslint-disable react/prop-types */

function ProgramPieChart (props) {
   
    const thisID = props.programId;

    const {loading, error, data} = useQuery(GET_WORKOUTS_BY_PROGRAM_ID, {
        variables: { id: thisID }});

    if (loading) return <Spinner />
    if (error) return <p>`Error: ${error.message}`</p>
 
    const workouts = [...data.Program.workouts];

    const dataForPie = calculateValues(workouts); 
   
  
return (
   <SectionDiv>

       <h3>So ist das Programm aufgeteilt:</h3>
       
       <StyledFlexWrapper justify="space-between" align="center" content="center">


    <MyPieChart data={dataForPie} />

       </StyledFlexWrapper>
     
   </SectionDiv>
)
}

export default ProgramPieChart;