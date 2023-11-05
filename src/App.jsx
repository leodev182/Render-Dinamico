import { Row, Col } from "react-bootstrap";
import {
  Listado,
  Formulario,
  Alert,
  baseColaboradores,
} from "./components/barrel";
import { useState } from "react";

const App = () => {
  // almacenar data en un hook
  const [colaboradores, setColaboradores] = useState(baseColaboradores); // []

  const [alert, setAlert] = useState({
    color: "",
    mensaje: "",
  });

  return (
    <>
      <div className="mx-4">
        <h1 className="text-start">Lista de colaboradores</h1>
        <Row>
          <Col sm={4}>
            {/* Crear componente Buscador */}
            <h1>Buscador</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={9}>
            {/* Crear componente Listado */}
            <Listado colaboradores={colaboradores} />
          </Col>
          <Col md={3} className="">
            <h2>Agregar colaborador</h2>
            {/* Crear componente Formulario */}
            <Formulario
              setAlert={setAlert}
              setColaboradores={setColaboradores}
              colaboradores={colaboradores}
            />
            {alert.mensaje !== "" && <Alert>{alert.mensaje}</Alert>}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default App;
