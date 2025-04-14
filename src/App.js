import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Marketplace from "./components/Marketplace/Marketplace";
import ListingDetails from "./components/Marketplace/ListingDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Marketplace />} />
        <Route path="/details/:id" element={<ListingDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
