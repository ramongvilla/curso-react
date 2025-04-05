import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const useFiled = ({ type, name }) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
    // console.log(event);
  };

  return {
    type,
    name,
    value,
    onChange,
  };
};

const InputField = ({label, ...props }) => {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Control {...props} placeholder={'Ingrese ' + label} />
      </Form.Group>
    </>
  );
};

export const FormTest = ({onFormSubmit}) => {
  const email = useFiled({ type: "email", name: "email" });
  const password = useFiled({ type: "password", name: "password" });

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      email: email.value,
      password: password.value,
    };

    console.log("send", formData);
    onFormSubmit(formData); // Pasamos los datos al componente padre (App)
  };

//   const handleConfirm = () => {
//   };

  return (
    <>
      <Form onSubmit={handleSubmit} className="p-5">
        <InputField label = 'Email' {...email}></InputField>
        <InputField label = 'Password' {...password}></InputField>
        {/* <Button variant="primary" type="submit">
          Submit
        </Button> */}
      </Form>
    </>
  );
};
