import React from "react";
import { Routes, Route } from "react-router-dom";

// Styles
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";

import Products from "./components/Products/Products";

function App() {
  return (
    <div className="bg-[#E6E7EB] w-full h-full flex items-center justify-center p-6 flex-col">
      <Header />
      <Routes>
        <Route path={"/"} element={<Products />} />
        <Route path={"/Cart"} element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
