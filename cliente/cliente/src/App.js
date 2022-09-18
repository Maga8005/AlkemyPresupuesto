import "./App.css";
import { useState, useEffect } from "react";

function App() {

  const [presupuesto, setpresupuesto] = useState([]);

  useEffect(() => {
   fetch("http://localhost:3001/api/")
   .then((response) => response.json())
   .then((presupuesto)=>setpresupuesto(presupuesto))
  }, []);

  return (
    <div>
      <h1>Resumen del Mes</h1>
      <tbody>
        <tr>
          <th>Concepto</th>
          <th>Monto</th>
          <th>Fecha</th>
          <th>Tipo</th>
          <th>Categoria</th>
        </tr>

        {presupuesto.map((item) => {
          return(          <tr key={item.id}>
            <td>{item.concepto}</td>
            <td>{item.monto}</td>
            <td>{item.fecha}</td>
            <td>{item.tipo}</td>
            <td>{item.categoria}</td>
          </tr>);
        })}
      </tbody>
    </div>
  );
}

export default App;
