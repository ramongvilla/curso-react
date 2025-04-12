import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { StaticModal } from "../components/StaticModal";
import { StaticModal2 } from "./StaticModal2";
import { FormProduct2 } from "./FormProduct2";
import Button from "react-bootstrap/Button";
import { Header } from "../components/Header";

export const App2 = () => {
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

  //Modal
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => {
    setShowModal(true);
  };

  // Filtro de Productos
  let fillProducts = [];

  const filterProducts = (category = "Ropa") => {

    fillProducts =
    products.filter((product) => product.category === category) || [];
    console.log(fillProducts);
  };

  filterProducts();

  return (
    <div className="container mt-4 d-flex flex-column">
      <Header filterProducts={filterProducts} />

      <Button variant="primary" className="" onClick={handleShow}>
        Nuevo Producto
      </Button>

      <StaticModal2
        title="Crear Producto"
        show={showModal}
        BodyComponent={FormProduct2}
        handleClose={handleClose}
      />

      <Layout products={fillProducts} />
    </div>
  );
};

export default App2;
