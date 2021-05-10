import React from "react";

import { useQuery } from "@apollo/client";
import { GET_USER } from "../graphql/queries";

import Greeting from "../components/Greeting";
import TodaysWorkout from "../components/TodaysWorkout";
import Spinner from "../components/Spinner";

function Dashboard () {

    const { data, loading, error } = useQuery(GET_USER);
    if (loading) return <Spinner />
  if (error) return <p>`Error: ${error.message}`</p>
   console.log(data.user.name);
   const userName = data.user.name;

    return(
        <>
        <Greeting name={userName} />
        <TodaysWorkout />
        </ >
    )
}

export default Dashboard;