// context/CartSidebarContext.js
import { createContext, useContext, useState } from "react";

const CartSidebarContext = createContext();

export const useCartSidebar = () => useContext(CartSidebarContext);

export const CartSidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);

  return (
    <CartSidebarContext.Provider value={{ isOpen, openSidebar, closeSidebar }}>
      {children}
    </CartSidebarContext.Provider>
  );
};
