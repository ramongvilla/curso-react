
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const StaticModal2 = ({ title= 'Modal React', BodyComponent, show = true, handleClose }) => {


  return (
    <>
   

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{BodyComponent && <BodyComponent></BodyComponent>}</Modal.Body>
        {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer> */}
      </Modal>
    </>
  );
};
