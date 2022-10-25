import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import AllCoins from "./pages/allCoins/AllCoins";
import SingleCoin from "./pages/singleCoin/SingleCoin";
import Home from "./pages/home/Home";
import News from "./pages/news/News";
import React from "react";

function App() {
  return (
    <ThemeProvider className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allCoins" element={<AllCoins />} />
        <Route path="/coin/:id" element={<SingleCoin />} />
        <Route path="/allNews" element={<News />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
