import React from "react";
import {
  BrowserRouter as Router, 
  Route, 
  Switch 
} from "react-router-dom";

import Layout from "./Layout";
import Main from "./Main";
import About from "./Components/About"

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path = "/" component={Main}/>
          <Route exact path="/about" component={About} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
