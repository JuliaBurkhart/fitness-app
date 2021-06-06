import React from "react";
import styled from 'styled-components';

import { useQuery } from "@apollo/client";
import { GET_USER } from "../graphql/queries";

import Greeting from "../components/Greeting";
import TodaysWorkout from "../components/TodaysWorkout";
import Spinner from "../components/Spinner";

const PageDiv = styled.div`
padding: 0 20px 70px 0;
`

function Dashboard () {

    const { data, loading, error } = useQuery(GET_USER);
    if (loading) return <Spinner />
  if (error) return <p>`Error: ${error.message}`</p>
   console.log(data.user.name);
   const userName = data.user.name;

    return(
        <PageDiv>
        <Greeting name={userName} />
        <TodaysWorkout />
        </PageDiv>
    )
}

export default Dashboard;