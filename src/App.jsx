import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import {
  Listado,
  Formulario,
  Alert,
  baseColaboradores,
  Buscador,
} from "./components/barrel";
import { useState } from "react";

const App = () => {
  const [colaboradores, setColaboradores] = useState(baseColaboradores);
  const [results, setResults] = useState(baseColaboradores);
  const [alert, setAlert] = useState({
    color: "",
    mensaje: "",
  });

  return (
    <>
      <div className="contenedor">
        <h1 className="text-start">Lista de colaboradores</h1>
        <Row>
          <Col sm={12} md={9} xl={6} className="mb-3">
            <Buscador
              setColaboradores={setColaboradores}
              colaboradores={colaboradores}
              setResults={setResults}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={9}>
            <Listado
              colaboradores={colaboradores}
              results={results}
              setResults={setResults}
              setAlert={setAlert}
            />
          </Col>
          <Col sm={12} md={3}>
            <h2 className="mb-3">Agregar colaborador</h2>
            <Formulario
              setAlert={setAlert}
              setColaboradores={setColaboradores}
              colaboradores={colaboradores}
              setResults={setResults}
              results={results}
            />
            {alert.mensaje !== "" && (
              <Alert variant={alert.color}>{alert.mensaje}</Alert>
            )}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default App;
