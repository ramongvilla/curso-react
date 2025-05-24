import { useState } from "react";

/**
 * Manejo de modal
 */
export const useModal = () => {

  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return {
    showModal,
    handleShow,
    handleClose
  }

}
