import React, { useEffect, useState } from "react";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Account from "../src/pages/Account";
import AllCoins from "./pages/allCoins/AllCoins";
import SingleCoin from "../src/pages/singleCoin/SingleCoin";
import Home from "../src/pages/home/Home";
import Login from "../src/pages/LogIn";
import News from "./pages/news/News";
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
        <Route path="/allCoins" element={<AllCoins />} />
        <Route path="/coin/:id" element={<SingleCoin />} />
        <Route path="/allNews" element={<News />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
