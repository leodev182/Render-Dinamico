import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Buscador = () => {
  return (
    <>
      <Form className="buscador">
        <Row>
          <Col sm={6} md={9} xl={6}>
            <Form.Control
              type="text"
              placeholder="Buscar un colaborador"
              className=" mr-sm-2"
            />
          </Col>
        </Row>
      </Form>
    </>
  );
};
