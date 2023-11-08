import { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

export const Buscador = ({ colaboradores, setColaboradores, setResults }) => {
  const searcher = (e) => {
    // console.log(e.target.value);
    const colaboradoresFiltrados = colaboradores.filter((colaborador) => {
      if (
        colaborador.nombre
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        colaborador.correo
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        colaborador.edad.includes(e.target.value) ||
        colaborador.telefono.includes(e.target.value) ||
        colaborador.cargo.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        return true;
      }
      return false;
    });
    setResults(colaboradoresFiltrados);
    // console.log(colaboradoresFiltrados);
  };

  return (
    <>
      <Form className="buscador">
        <Row>
          <Col sm={6} md={9} xl={6}>
            <Form.Control
              // value={search}
              type="text"
              placeholder="Buscar un colaborador"
              className=" mr-sm-2"
              onChange={searcher}
            />
          </Col>
        </Row>
      </Form>
    </>
  );
};
