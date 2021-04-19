import React from "react";
import GlobalStyle from './GlobalStyles';

import { Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Browse from "./pages/Browse";
import Program from "./pages/Program";



function App() {
  return (

      <div>
      <GlobalStyle />
      <Route path="/" exact component={Dashboard} />
      <Route path="/browse" component={Browse} />
      <Route path="/" component={Navbar} />
      <Route path="/program" component={Program} />
    
    </div>

  
  );
}

export default App;
