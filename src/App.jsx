import { useEffect, useState } from "react";
import { Layout } from "./components/Layout";

import { StaticModal } from "./components/StaticModal";
import { FormProduct } from "./form/FormProduct";
import Button from "react-bootstrap/Button";
import { Header } from "./components/Header";
import { Badge } from "react-bootstrap";

export const App = () => {
  /**
   * Productos
   */

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
   * Manejo de modal
   */
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => {
    setShowModal(true);
  };

  /**
   * Filtrando Modal
   */

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

  const filteredProducts = filterProducts(products);

  /**
   * Crear un nuevo Producto
   */

  const handleSaveProduct = async (formProduct) => {
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
      handleClose(); // cerrar modal
      fetchProducts(); // refrescar lista
    } else {
      console.error("Error al guardar el producto");
    }
  };

  return (
    <>
      <Header changeFilters={setFilters} category={filters.category} />
      <div className="container">
        <Button variant="dark" className="" onClick={handleShow}>
          Nuevo Producto
        </Button>
      </div>
      <div className="container mt-4 d-flex flex-column">
        <StaticModal
          title="Crear Producto"
          show={showModal}
          BodyComponent={(props) => (
            <FormProduct {...props} onSubmit={handleSaveProduct} />
          )}
          handleClose={handleClose}
        />

        <Layout products={filteredProducts} />
      </div>
    </>
  );
};

export default App;
