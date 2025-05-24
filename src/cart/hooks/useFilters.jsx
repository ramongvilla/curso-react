import { useState } from "react";

export const useFilters = () => {

  const [filters, setFilters] = useState({
    category: "all", // todas
  });

  const filterProducts = (products = []) => {
    return products.filter((product) => {
      return (
        filters.category === "all" || product.category === filters.category
      );
    });
  };

  return {
    filters,
    setFilters,
    filterProducts
  }
}
