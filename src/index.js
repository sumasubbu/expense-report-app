import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/index.css";
import App from "./App";
import Login from "./Login";
import AddExpense from "./AddExpense";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="addexpense" element={<AddExpense />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<App />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer autoClose={3000} />
  </div>
);
