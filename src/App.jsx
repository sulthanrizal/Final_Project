import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import SearchAgency from "./pages/search-agency";
import Header from "./components/header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search-agency" element={<SearchAgency />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
