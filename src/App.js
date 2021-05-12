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

      <div>
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
  
      <Route path="/exercise" component={Exercise} />

      
      </div>
  );
}

export default App;

/////// Fragen an Eric

// Bilder bisher in public... Wie in src einbinden?
// --> am besten in eigenen Ordner zu jeder component und dann importieren!!!
// --> für die svgs gits noch ne extra/bessere möglichkeit so dass die dann auch veränderbar sind,
// dazu gibts einen Link in der Gruppe

// Tortendiagramm wie / womit erstellen? Library?
// --> in Notion ist ein Link zu verschiedenen Librarys für Torten

// ES Lint und die react/prop-types. Immer prop-types angeben oder Regel global ausstellen?
// --> am schönsten wäre es, immer einen prop-type zu definieren

// Ordnerstruktur


