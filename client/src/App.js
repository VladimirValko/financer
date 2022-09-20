import React, { useEffect, useState } from "react";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Account from "../src/pages/Account";
import Crypto from "../src/pages/Crypto";
import Home from "../src/pages/home/Home";
import Login from "../src/pages/LogIn";
import News from "../src/pages/News";
import Register from "../src/pages/Register";

function App() {
  return (
    <ThemeProvider className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<Login />} />
        <Route path="/signUp" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
