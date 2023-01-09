import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import List from "./Components/List";
import Create from "./Components/Create";
import Header from "./Components/sub/Header";
import Banner from "./Components/sub/Banner";
import Footer from "./Components/sub/Footer";

import './assets/css/custom.css';

function App() {
  return (
    <Fragment>     
      <Router>
        <Header />
        <Banner />
        <Switch>          
          <Route path="/list">
            <List />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </Fragment>
  );
}

export default App;
