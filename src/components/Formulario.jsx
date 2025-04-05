import { useState } from "react";

// Hook personalizado para manejar el estado de los campos
const useField = ({ type, name }) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    type,
    name,
    value,
    onChange,
  };
};

function Formulario() {
  // Usar useField para cada campo
  const nombre = useField({ type: "text", name: "nombre" });
  const email = useField({ type: "email", name: "email" });
  const mensaje = useField({ type: "text", name: "mensaje" });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Recoger los valores de los hooks personalizados
    const formData = {
      nombre: nombre.value,
      email: email.value,
      mensaje: mensaje.value,
    };

    console.log("Datos enviados:", formData);
  };

  return (
    <div className="container mt-4">
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre:</label>
          <input className="form-control" {...nombre} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input className="form-control" {...email} />
        </div>
        <div className="mb-3">
          <label className="form-label">Mensaje:</label>
          <textarea className="form-control" {...mensaje} />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Formulario;
