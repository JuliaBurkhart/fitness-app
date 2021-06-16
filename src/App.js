import React from "react";
import GlobalStyle from './GlobalStyles';

import { Redirect, Route } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { GET_IS_LOGGED_IN } from "./graphql/queries";

import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Browse from "./pages/Browse";
import Program from "./pages/Program";
import Workout from "./pages/Workout";
import Exercise from "./pages/Exercise";
import Spinner from "./components/Spinner";




function App() {
  const { data, loading, error } = useQuery(GET_IS_LOGGED_IN);
  if (loading) return <Spinner />
if (error) return <p>`Error: ${error.message}`</p>
 const isLoggedIn = data.userIsLoggedIn;
 console.log(isLoggedIn);
  return (

      <>
      <GlobalStyle />

      <Route exact path="/">
  {isLoggedIn ? <Redirect to="/dashboard" /> : <Login />}
</Route>

      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/dashboard" exact component={Navbar} />

      <Route path="/browse" component={Browse} />
      <Route path="/browse" component={Navbar} />

      <Route path="/program/:programId" component={Program} />
      <Route path="/program" component={Navbar} />

      <Route path="/workout/:programSlug/:workoutId/:day" component={Workout} />
  
      <Route path="/exercise/:exerciseType/:exerciseId/:repsDuration" component={Exercise} />

      
      </>
  );
}

export default App;



