import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import DetailedPost from "./components/DetailedPost/DetailedPost";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home">
          <Body />
        </Route>
        <Route path="/posts/:postId">
          <DetailedPost />
        </Route>
        <Route exact path="/">
          <Body />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
