import React from "react";
import GlobalStyle from './GlobalStyles';

import { Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Browse from "./pages/Browse";
import Program from "./pages/Program";
import Workout from "./pages/Workout";


function App() {
  return (

      <div>
      <GlobalStyle />
      <Route path="/" exact component={Dashboard} />
      <Route path="/" exact component={Navbar} />

      <Route path="/browse" component={Browse} />
      <Route path="/browse" component={Navbar} />


      <Route path="/program" component={Program} />
      <Route path="/program" component={Navbar} />

      <Route path="/workout" component={Workout} />

      
      </div>
  );
}

export default App;

/////// Fragen an Eric

// Bilder bisher in public... Wie in src einbinden?

// Tortendiagramm wie / womit erstellen? Library?

// ES Lint und die react/prop-types. Immer prop-types angeben oder Regel global ausstellen?

// Ordnerstruktur

