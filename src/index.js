import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Accounts from "./Accounts";
import Password from "./Password";
import Security from "./Security";
import Application from "./Application";
import Notification from "./Notification";
import Error from "./Error";
import "./Router.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="accounts" element={<Accounts />}></Route>
          <Route path="password" element={<Password />}></Route>
          <Route path="security" element={<Security />}></Route>
          <Route path="application" element={<Application />}></Route>
          <Route path="notification" element={<Notification />}></Route>
        </Route>
        <Route path="*" element={<Error/>}></Route>
      </Routes>
    </BrowserRouter>
  </>
);
