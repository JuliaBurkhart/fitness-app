import React from "react";
import GlobalStyle from './GlobalStyles';

import { Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Browse from "./pages/Browse";




function App() {
  return (

      <div>
      <GlobalStyle />
      <Route path="/" exact component={Dashboard} />
      <Route path="/browse" component={Browse} />
      <Route path="/" component={Navbar} />
    
    </div>

  
  );
}

export default App;
