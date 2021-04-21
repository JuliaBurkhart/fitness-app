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
// --> am besten in eigenen Ordner zu jeder component und dann importieren!!!
// --> für die svgs gits noch ne extra/bessere möglichkeit so dass die dann auch veränderbar sind,
// dazu gibts einen Link in der Gruppe

// Tortendiagramm wie / womit erstellen? Library?
// --> in Notion ist ein Link zu verschiedenen Librarys für Torten

// ES Lint und die react/prop-types. Immer prop-types angeben oder Regel global ausstellen?
// --> am schönsten wäre es, immer einen prop-type zu definieren

// Ordnerstruktur

// styled weg bei den const, große Sachen in eigene ordner mit eigenem inage ordner, library gibts einen link in notion, prop types definieren wäre schön.

