const BASE_URL = "https://ramonshoppage-production.up.railway.app";

export const API_PATHS = {
  GET_PRODUCTS: `${BASE_URL}/products`,
  ADD_PRODUCTS: `${BASE_URL}/addProducts`,
  PRODUCT_BY_ID: (id)=> `${BASE_URL}/products/${id}`,
};
