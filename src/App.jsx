import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Layout } from "./components/Layout";
import { ProductForm } from "./components/ProductForm";
import { StaticModal } from "./components/StaticModal";
import { FormTest } from "./components/Form";

export const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch(
      "https://ramonshoppage-production.up.railway.app/products"
    );
    const data = await response.json();
    setProducts(data);
  };

  // const handleAddProduct = async () => {
  //   setShowModal(false);
  //   await fetch('https://ramonshoppage-production.up.railway.app/addProducts', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       ...newProduct,
  //       price: parseFloat(newProduct.price),
  //       rating: { rate: 0, count: 0 },
  //     }),
  //   });
  //   setNewProduct({
  //     sku: '', title: '', price: '', description: '', category: '', image: '',
  //   });

  //   fetchProducts();
  // };

  useEffect(() => {
    fetchProducts();
  }, []);

  // modal
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleConfirm = () => {
    console.log("guardar", formProduct);

    setShowModal(false);
  };

  // crear producto

  const [formProduct,setFormProduct] = useState({})

  const handleFormSubmit = (data) => {
    console.log(data);
    
    setFormProduct(data); // Guardamos los datos del formulario en el estado de App
    console.log("Datos recibidos en App:", data);
  };


  return (
    <div className="container mt-4">
      <Button onClick={() => setShowModal(true)} variant="primary">
        Nuevo Producto
      </Button>

      <StaticModal
        show={showModal}
        handleClose={handleClose}
        handleConfirm={handleConfirm}
        title="Crear Producto"
        BodyComponent={()=> <FormTest onFormSubmit={handleFormSubmit}/>}
      />

      <Layout products={products} />
    </div>
  );
};

export default App;
