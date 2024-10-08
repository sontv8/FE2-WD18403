import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductAdd from "./components/ProductAdd";
import ProductUpdate from "./components/ProductUpdate";
import Dashboard from "./pages/Dashboard";
import AdminLayout from "./layouts/AdminLayout";
import ProductManagement from "./pages/ProductManagement";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/add" element={<ProductAdd />} />
        <Route path="/products/:id/update" element={<ProductUpdate />} /> */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<ProductManagement />} />
          <Route path="products/add" element={<AddProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
