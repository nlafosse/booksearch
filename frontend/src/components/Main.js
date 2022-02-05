import React from "react";
import { Route, Switch } from "react-router";
import Navbar from "./Navbar";
import Home from "./Home";
import Books from "./Books";
import Book from "./Book";
import Authors from "./Authors";
import Author from "./Author";
import Subjects from "./Subjects";
import Subject from "./Subject";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route
          path="/books/:title"
          component={(props) => <Books {...props} />}
        />
        <Route
          path="/book/:bookid"
          component={(props) => <Book {...props} />}
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
          component={(props) => <Subject {...props} />}
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
