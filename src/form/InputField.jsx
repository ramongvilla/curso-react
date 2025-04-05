import Form from 'react-bootstrap/Form';

export const InputField = ({ label, ...props }) => {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Control {...props} placeholder={"Ingrese " + label} />
      </Form.Group>
    </>
  );
};