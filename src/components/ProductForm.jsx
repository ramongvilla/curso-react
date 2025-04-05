import { Button, Modal } from 'react-bootstrap';
export const ProductForm = ({ newProduct, setNewProduct, handleAddProduct }) => (
    <Modal show onHide={() => setNewProduct(null)}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {Object.keys(newProduct || {}).map((key) => (
          <div className="mb-3" key={key}>
            <label className="form-label">{key}</label>
            <input
              type={key === 'price' ? 'number' : 'text'}
              className="form-control"
              value={newProduct[key]}
              onChange={(e) => setNewProduct({ ...newProduct, [key]: e.target.value })}
            />
          </div>
        ))}
        <Button variant="success" onClick={handleAddProduct}>Add Product</Button>
      </Modal.Body>
    </Modal>
  );