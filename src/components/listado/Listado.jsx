import { Table } from "react-bootstrap";

export const Listado = ({ colaboradores }) => {
  //   console.table(colaboradores);

  return (
    <>
      <Table responsive striped bordered>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Telefono</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {colaboradores.map((colaborador) => (
            <tr key={colaborador.id}>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefono}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
