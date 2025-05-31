import { CartSidebar } from "../cart/components/CartSidebar";
import { useCart } from "../cart/hooks/useCart";
import { useCartSidebar } from "../cart/hooks/useCartSidebar";

export const CartSidebarContainer = () => {
  const { items } = useCart();
  const { isOpen, closeSidebar } = useCartSidebar();

  return (
    <CartSidebar show={isOpen} onClose={closeSidebar} cartItems={items} />
  );
};
