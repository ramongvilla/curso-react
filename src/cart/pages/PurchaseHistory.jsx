// components/PurchaseHistory.js
import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";

export const PurchaseHistory = () => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("purchases");
    if (stored) setPurchases(JSON.parse(stored));
  }, []);

  return (
    <div className="p-4">
      <h2>Historial de Compras</h2>
      {purchases.length === 0 ? (
        <p>No hay compras registradas.</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Fecha</th>
              <th>Productos</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((purchase, index) => (
              <tr key={purchase.id}>
                <td>{index + 1}</td>
                <td>{purchase.date}</td>
                <td>
                  <ul>
                    {purchase.items.map((item) => (
                      <li key={item.id}>
                        {item.title} x{item.quantity} - ${item.price}
                      </li>
                    ))}
                  </ul>
                </td>
                <td>${purchase.total}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};
