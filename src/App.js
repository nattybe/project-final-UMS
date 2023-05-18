import logo from "./logo.svg";
import "./App.css";
import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
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
const PrivateRoutes = () => {
  const auth = true;
  return auth ? <Outlet /> : <Navigate to="messages" />;
};
const App = () => {
  // const oldRoutes = [
  //   <Router>
  //     <Header />
  //     <Switch>
  //       <Route exact path="/">
  //         <HomePage />
  //       </Route>
  //       <Route path="/student">
  //         <StudentPage />
  //       </Route>
  //       <Route path="/instructor">
  //         <InstructorPage />
  //       </Route>
  //       <Route path="/library">
  //         <LibrairanPage />
  //       </Route>
  //       <Route path="/programoffice">
  //         <ProgramOfficePage />
  //       </Route>
  //       <Route path="/login">
  //         <LoginPage />
  //       </Route>
  //       <Route path="/registrar">
  //         <RegistrarPage />
  //       </Route>
  //       <Route path="/messages">
  //         <ChatMessage />
  //       </Route>
  //       <Route path="/profile">
  //         <Profile />
  //       </Route>
  //       <Route path="*">
  //         <ErrorPage />
  //       </Route>
  //     </Switch>
  //   </Router>,
  // ];
  // const router=createBrowserRouter(
  //   createRoutesFromElements
  // );

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Header />} errorElement={<ErrorPage />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="messages" element={<ChatMessage />} />
        <Route path="registrar" element={<RegistrarPage />} />
        <Route element={<PrivateRoutes />}>
          <Route path="programoffice" element={<ProgramOfficePage />} />
          <Route path="instructor" element=<InstructorPage /> />
          <Route path="student" element={<StudentPage />} />
          <Route path="librarian" element={<LibrairanPage />} />
        </Route>
        <Route />
      </Route>
    )
  );
  // window.sessionStorage.setItem("login", JSON.stringify(state));
  return <RouterProvider router={routes} />;
};

export default App;
