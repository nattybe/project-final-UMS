import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Font Awesom/css/fontawesome-all.min.css";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./pages/home-page";
import StudentPage from "./pages/student-page";
import InstructorPage from "./pages/instructor-page";
import LibrairanPage from "./pages/librairan-page";
import ProgramOfficePage from "./pages/program-office-page";
import ErrorPage from "./pages/errorPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProgramOfficePage />
    {/* <Router>
    
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="student">
          <StudentPage />
        </Route>
        <Route path='instructor'>
          <InstructorPage />
        </Route>
        <Route path='library'>
          <LibrairanPage/>
        </Route>
        <Route path='programoffice'>
        <ProgramOfficePage/>
        </Route>
        <Route path='*'>
        <ErrorPage/>
        </Route>
    </Router> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
