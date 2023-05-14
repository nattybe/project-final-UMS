import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import StudentPage from "./pages/student-page";
import InstructorPage from "./pages/instructor-page";
import LibrairanPage from "./pages/librairan-page";
import ProgramOfficePage from "./pages/program-office-page";
import ErrorPage from "./pages/errorPage";
import LoginPage from "./pages/loginPage";
import Header from "./Comp/header";
import RegistrarPage from "./pages/registrarPage";
import ChatMessage from "./Comp/message";
import Profile from "./Comp/profile";

const App = () => {
  const state = {
    loginas: 'student',
    hi: "true",
  };
  

  window.sessionStorage.setItem("login", JSON.stringify(state));
  return (
    <Router>
    <Header/>
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
        <Route path="/login">
          <LoginPage/>
        </Route><Route path="/registrar">
          <RegistrarPage/>
        </Route>
        <Route path="/messages">
          <ChatMessage />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
