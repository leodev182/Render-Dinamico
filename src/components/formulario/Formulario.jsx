import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export const Formulario = ({ setAlert, setColaboradores, colaboradores }) => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const onchange = (valor) => {
    setFormulario({ ...formulario, [valor.target.name]: valor.target.value });
  };

  // console.table(formulario);

  const onsubmit = (e) => {
    e.preventDefault();

    if (
      formulario.nombre == "" ||
      formulario.correo == "" ||
      formulario.edad == "" ||
      formulario.cargo == "" ||
      formulario.telefono == ""
    ) {
      setAlert({
        color: "danger",
        mensaje: "Debes llenar todos los campos!",
      });
      return;
    } else {
      setAlert({
        color: "success",
        mensaje: "Agregado con Exito!",
      });
    }

    const i = Date.now().toString(30);
    const newColaborador = { ...formulario, id: i };
    setColaboradores([...colaboradores, newColaborador]);

    e.target.reset();
  };

  console.table(colaboradores);

  return (
    <Form onSubmit={onsubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          className="mb-2"
          name="nombre"
          type="text"
          placeholder="Nombre del colaborador"
          onChange={onchange}
        />
        <Form.Control
          className="mb-2"
          name="correo"
          type="email"
          placeholder="Email del colaborador"
          onChange={onchange}
        />
        <Form.Control
          className="mb-2"
          name="edad"
          type="text"
          placeholder="Edad del colaborador"
          onChange={onchange}
        />
        <Form.Control
          className="mb-2"
          name="cargo"
          type="text"
          placeholder="Cargo del colaborador"
          onChange={onchange}
        />
        <Form.Control
          className="mb-2"
          name="telefono"
          type="text"
          placeholder="Teléfono del colaborador"
          onChange={onchange}
        />
        <Button variant="primary" type="submit" className="w-100">
          Agregar Colaborador
        </Button>
      </Form.Group>
    </Form>
  );
};
