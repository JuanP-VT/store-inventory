import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import AddCategory from "./components/categories/AddCategory";
import AddProduct from "./components/products/AddProduct";
import ViewCategory from "./components/categories/ViewCategory";
import ViewProduct from "./components/products/ViewProductRoute";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/addcategory" element={<AddCategory />} />
        <Route path="/viewcategories" element={<ViewCategory />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/" element={<ViewProduct />} />
      </Routes>
    </>
  );
}

export default App;
