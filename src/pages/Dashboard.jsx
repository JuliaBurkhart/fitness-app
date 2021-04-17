import React from "react";

import Navbar from "../components/Navbar"
import Greeting from "../components/Greeting"
import TodaysWorkout from "../components/TodaysWorkout"


function Dashboard () {
    return(
        <>
        <Greeting />
        <TodaysWorkout />
        <Navbar />
        </ >
    )
}

export default Dashboard;