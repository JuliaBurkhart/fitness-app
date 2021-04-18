import React from "react";

import Greeting from "../components/Greeting";
import TodaysWorkout from "../components/TodaysWorkout";


function Dashboard () {
    return(
        <>
        <Greeting />
        <TodaysWorkout />
        </ >
    )
}

export default Dashboard;