import { Layout } from "../../components/Layout";

import Button from "react-bootstrap/Button";
import { useProducts } from "../hooks/useProducts";
import { useModal } from "../hooks/useModal";
import { useFilters } from "../hooks/useFilters";
import { StaticModal } from "../../components/StaticModal";
import { FormProduct } from "../../form/FormProduct";

export const Home = () => {
  const { products, addProduct } = useProducts();
  const { showModal, handleShow, handleClose } = useModal();
  const { filters, setFilters, filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  const handleSaveProduct = async (FormProduct) => {
    const success = await addProduct(FormProduct);
    if (success) {
      handleClose;
    }
  };

  return (
    <>
      {/* <Header changeFilters={setFilters} category={filters.category} /> */}

      <div className="container">
        <Button variant="dark" onClick={handleShow}>
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

export default Home;
