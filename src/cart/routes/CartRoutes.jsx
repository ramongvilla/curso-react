import { Route, Routes } from "react-router";


import { Header } from "../../ui/components/header";
import Home from "../pages/Home";
import { Cart } from "../pages/Cart";
import { DetailProduct } from "../pages/DetailProduct";
import { Navigate } from "react-router";

export const CartRoutes = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="home" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="detail-product/:id" element={<DetailProduct />} />
      </Routes>
    </>
  );
};
