import React from "react";
import { Route, Switch } from "react-router";
import Navbar from "./Navbar";
import Home from "./Home";
import Books from "./Books";
import SingleBook from "./SingleBook";
import Authors from "./Authors";
import Author from "./Author";
import Subjects from "./Subjects";
import SingleSubject from "./SingleSubject";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route
          exact
          path="/books"
          component={(props) => <Books {...props} />}
        />
        <Route
          path="/books/:title"
          component={(props) => <Books {...props} />}
        />
        <Route
          path="/book/:bookid"
          component={(props) => <SingleBook {...props} />}
        />
        <Route
          exact
          path="/authors"
          component={(props) => <Authors {...props} />}
        />
        <Route
          path="/authors/:name"
          component={(props) => <Author {...props} />}
        />
        <Route
          exact
          path="/subjects"
          component={(props) => <Subjects {...props} />}
        />
        <Route
          path="/subjects/:subject"
          component={(props) => <SingleSubject {...props} />}
        />
        {/* <Route
          exact
          path="/about"
          component={(props) => <About {...props} />}
        /> */}
      </Switch>
    </div>
  );
};

export default Main;
