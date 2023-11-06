import { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Buscador = ({ colaboradores, setColaboradores }) => {
  const [search, setSearch] = useState("");

  const busqueda = (e) => {
    setSearch(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (result) => {
    const resultadoiFinal = colaboradores.filter((elemento) => {
      if (
        elemento.nombre.toLowerCase().includes(result.toLowerCase()) ||
        elemento.correo.toLowerCase().includes(result.toLowerCase()) ||
        elemento.cargo.toLowerCase().includes(result.toLowerCase())
      ) {
        return elemento;
      } else {
      }
    });
    setColaboradores(resultadoiFinal);
    console.log(resultadoiFinal);
  };

  return (
    <>
      <Form className="buscador">
        <Row>
          <Col sm={6} md={9} xl={6}>
            <Form.Control
              value={search}
              type="text"
              placeholder="Buscar un colaborador"
              className=" mr-sm-2"
              onChange={busqueda}
            />
          </Col>
        </Row>
      </Form>
    </>
  );
};
