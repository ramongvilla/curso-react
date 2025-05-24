import { Route, Routes } from "react-router";

import { Login } from "../auth/pages/Login";
import { CartRoutes } from "../cart/routes/CartRoutes";


export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<CartRoutes />} />
      </Routes>
    </>
  );
};
