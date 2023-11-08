import { Table, CloseButton } from "react-bootstrap";

export const Listado = ({ results, setResults, setAlert }) => {
  //   console.table(results);

  const deleteP = (id) => {
    const encontrarP = results.filter((persona) => persona.id !== id);
    setResults(encontrarP);
    setAlert({
      color: "warning",
      mensaje: "Eliminaste un colaborador",
    });
  };

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
          {results.map((colaborador) => (
            <tr key={colaborador.id}>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefono}</td>
              <td className="text-center">
                <CloseButton onClick={() => deleteP(colaborador.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
