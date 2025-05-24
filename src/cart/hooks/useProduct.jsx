import { useEffect, useState } from "react";
import { API_PATHS } from "../../apiPaths";

export const useProduct = (id) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) return; // no se proporciono ID

    const fetchProduct = async () => {
      try {
        const response = await fetch(API_PATHS.PRODUCT_BY_ID(id));

        if (!response.ok) {
          throw new Error("Producto no encontrado");
        }

        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [id]);

  return { product };
};
