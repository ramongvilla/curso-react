// import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { InputField } from "./InputField";
import { useField } from "../hooks/useField";

// export const FormProduct2 = ({}) => {
//   const [formData, setFormData] = useState({
//     password: "",
//     email: "",
//   });

//   const handleChange = (event) => {
//     console.log(event);

//     setFormData({
//         ...formData,
//         [event.target.name]: event.target.value
//       })
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Datos enviados:", formData);
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Form.Group className="mb-3">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control
//           type="email"
//           placeholder="Enter email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//       </Form.Group>

//       <Form.Group className="mb-3">
//         <Form.Label>Password</Form.Label>
//         <Form.Control
//           type="password"
//           placeholder="Password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//       </Form.Group>

//       <Button variant="primary" type="submit">
//         Guardar
//       </Button>
//     </Form>
//   );
// };
// export const FormProduct2 = ({}) => {
//   const useField = ({ type, name }) => {
//     const [value, setValue] = useState("");

//     const onChange = (event) => {
//       console.log(event);
//       setValue(event.target.value);
//     };

//     return {
//       type,
//       name,
//       value,
//       onChange,
//     };
//   };

// const email = useField({type:'email',name:'email'});
// const password = useField({type:'password',name:'password'});
// const name = useField({type:'text',name:'name'});

// const handleSubmit = (event) => {
//   event.preventDefault();

//   const formData = {
//     email:email.value,
//     password:password.value,
//     name:name.value
//   }
//   console.log("Datos enviados:", formData);
// };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Form.Group className="mb-3">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control
//         {...email}
//           placeholder="Enter Email"
//         />
//       </Form.Group>
//       <Form.Group className="mb-3">
//         <Form.Label>Password</Form.Label>
//         <Form.Control
//         {...password}
//           placeholder="Enter Password"
//         />
//       </Form.Group>
//       <Form.Group className="mb-3">
//         <Form.Label>Name</Form.Label>
//         <Form.Control
//         {...name}
//           placeholder="Enter Name"
//         />
//       </Form.Group>

//       <Button variant="primary" type="submit">
//         Guardar
//       </Button>
//     </Form>
//   );
// };

// COMPNENTE
// const InputField = ({ label, ...props }) => {
//   return (
//     <>
//       <Form.Group className="mb-3">
//         <Form.Label>{label}</Form.Label>
//         <Form.Control {...props} placeholder={"Ingrese " + label} />
//       </Form.Group>
//     </>
//   );
// };

// export const FormProduct2 = ({}) => {
//   const useField = ({ type, name }) => {
//     const [value, setValue] = useState("");

//     const onChange = (event) => {
//       setValue(event.target.value);
//     };

//     return {
//       type,
//       name,
//       value,
//       onChange,
//     };
//   };

//   const email = useField({ type: "email", name: "email" });
//   const password = useField({ type: "password", name: "password" });
//   const name = useField({ type: "text", name: "name" });

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const formData = {
//       email: email.value,
//       password: password.value,
//       name: name.value,
//     };
//     console.log("Datos enviados:", formData);
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <InputField label={"Email"} {...email}></InputField>
//       <InputField label={"Password"} {...password}></InputField>
//       <InputField label={"Name"} {...name}></InputField>
//       <Button variant="primary" type="submit">
//         Guardar
//       </Button>
//     </Form>
//   );
// };

// export const FormProduct2 = ({}) => {

//   const email = useField({ type: "email", name: "email" });
//   const password = useField({ type: "password", name: "password" });
//   const name = useField({ type: "text", name: "name" });

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const formData = {
//       email: email.value,
//       password: password.value,
//       name: name.value,
//     };
//     console.log("Datos enviados:", formData);
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <InputField label={"Email"} {...email}></InputField>
//       <InputField label={"Password"} {...password}></InputField>
//       <InputField label={"Name"} {...name}></InputField>
//       <Button variant="primary" type="submit">
//         Guardar
//       </Button>
//     </Form>
//   );
// };
// title: "NUEVO DESDE REACT",
// sku: 123,
// price: 109.95,
// description:
//   "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// category: "men's clothing",
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",

export const FormProduct = ({handleClose}) => {
  // const email = useField({ type: "email", name: "email" });
  // const password = useField({ type: "password", name: "password" });
  // const name = useField({ type: "text", name: "name" });

  // inputs for product
  const title = useField({ type: "text", name: "title" });
  const sku = useField({ type: "number", name: "sku" });
  const price = useField({ type: "number", name: "price" });
  const description = useField({ type: "text", name: "description" });
  const category = useField({ type: "text", name: "category" });
  const image = useField({ type: "text", name: "image" });

  const handleAddProduct = async (formProduct) => {
    const response = await fetch(
      "https://ramonshoppage-production.up.railway.app/addProducts",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formProduct),
        // ...
      }
    );

    console.log(response);
    return response;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formProduct = {
      title: title.value,
      sku: sku.value,
      price: price.value,
      description: description.value,
      category: category.value,
      image: image.value,
      rating: {
        rate: 3.9,
        count: 120,
      },
    };

    


    console.log(formProduct);
    
    console.log('Guardando...');
   
   
    handleAddProduct(formProduct).then((res) => {
      handleClose()
      console.log("Datos enviados:",res );
      console.log('Guardado');
    });
    
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputField label={"Titulo"} {...title}></InputField>
      <InputField label={"SKU"} {...sku}></InputField>
      <InputField label={"Precio"} {...price}></InputField>
      <InputField label={"Descripcion"} {...description}></InputField>
      <InputField label={"Categoría"} {...category}></InputField>
      <InputField label={"Imagen (url)"} {...image}></InputField>

      <Button variant="primary" type="submit">
        Guardar
      </Button>
    </Form>
  );
};
