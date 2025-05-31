import { CartProvider } from "./cart/hooks/useCart";
import { CartSidebarProvider } from "./cart/hooks/useCartSidebar";
import { CartSidebarContainer } from "./components/CartSidebarContainer";
import { AppRouter } from "./routes/AppRouter";

export const EcommerceApp = () => {
  return (
    <>
      <CartProvider>
        <CartSidebarProvider>
          <AppRouter></AppRouter>
          <CartSidebarContainer />
        </CartSidebarProvider>
      </CartProvider>
    </>
  );
};
