import { Table, Image, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const PurchaseHistory = () => {
  const [purchases, setPurchases] = useState([]);
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("asc");
   const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("purchases");
    if (stored) {
      setPurchases(JSON.parse(stored));
    }
  }, []);

  const sortData = (data) => {
    const sorted = [...data].sort((a, b) => {
      if (sortBy === "date") {
        return sortOrder === "asc"
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date);
      } else if (sortBy === "total") {
        return sortOrder === "asc"
          ? parseFloat(a.total) - parseFloat(b.total)
          : parseFloat(b.total) - parseFloat(a.total);
      }
      return 0;
    });
    return sorted;
  };

  const handleSort = (column) => {
    if (column === sortBy) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  const sortedPurchases = sortData(purchases);

  const renderSortIcon = (column) => {
    if (sortBy !== column) return null;
    return (
      <i
        className={`bi ${
          sortOrder === "asc" ? "bi-arrow-up" : "bi-arrow-down"
        } ms-1`}
      ></i>
    );
  };

  return (
    <div className="p-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Historial de Compras</h2>
        <Button variant="primary" onClick={() => navigate("/grafica")}>
          Ver Gráfico
        </Button>
      </div>
      {purchases.length === 0 ? (
        <p>No hay compras registradas.</p>
      ) : (
        <Table bordered hover responsive>
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th
                onClick={() => handleSort("date")}
                style={{ cursor: "pointer" }}
              >
                Fecha {renderSortIcon("date")}
              </th>
              <th>Productos</th>
              <th
                onClick={() => handleSort("total")}
                style={{ cursor: "pointer" }}
              >
                Total {renderSortIcon("total")}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedPurchases.map((purchase, index) => (
              <tr key={purchase.id}>
                <td>{index + 1}</td>
                <td>{purchase.date}</td>
                <td>
                  <Table bordered size="sm" className="mt-2">
                    <thead className="table-secondary">
                      <tr>
                        <th>Imagen</th>
                        <th>Producto</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {purchase.items.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <Image
                              src={item.image}
                              alt={item.title}
                              thumbnail
                              style={{
                                width: "60px",
                                height: "60px",
                                objectFit: "cover",
                              }}
                            />
                          </td>
                          <td>{item.title}</td>
                          <td>{item.description}</td>
                          <td>${parseFloat(item.price).toFixed(2)}</td>
                          <td>{item.quantity}</td>
                          <td>
                            $
                            {(
                              parseFloat(item.price) * parseInt(item.quantity)
                            ).toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </td>
                <td>${parseFloat(purchase.total).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};
