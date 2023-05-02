import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import StudentPage from "./pages/student-page";
import InstructorPage from "./pages/instructor-page";
import LibrairanPage from "./pages/librairan-page";
import ProgramOfficePage from "./pages/program-office-page";
import ErrorPage from "./pages/errorPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/student">
          <StudentPage />
        </Route>
        <Route path="/instructor">
          <InstructorPage />
        </Route>
        <Route path="/library">
          <LibrairanPage />
        </Route>
        <Route path="/programoffice">
          <ProgramOfficePage />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
