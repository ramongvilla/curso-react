import { useEffect, useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await fetch(
      "https://ramonshoppage-production.up.railway.app/products"
    );
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  /**
   * Crear un nuevo Producto
   */
  const addProduct = async (formProduct) => {
    const response = await fetch(
      "https://ramonshoppage-production.up.railway.app/addProducts",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formProduct),
      }
    );

    if (response.ok) {
      console.log("Producto guardado correctamente");
      //   handleClose(); // cerrar modal
      fetchProducts(); // refrescar lista
    } else {
      console.error("Error al guardar el producto");
    }
  };

  return {
    products,
    fetchProducts,
    addProduct,
  };
};
