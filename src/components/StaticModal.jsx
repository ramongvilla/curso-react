

import Modal from "react-bootstrap/Modal";

export const StaticModal = ({ title= 'Modal React', BodyComponent, show = true, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{BodyComponent && <BodyComponent handleClose={handleClose} ></BodyComponent>}</Modal.Body>
      </Modal>
    </>
  );
};
