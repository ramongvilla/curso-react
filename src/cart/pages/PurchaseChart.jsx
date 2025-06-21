import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router";

const COLORS = ["#0d6efd", "#198754", "#ffc107", "#dc3545", "#6f42c1", "#20c997"];

export const PurchaseChart = () => {
  const [barData, setBarData] = useState([]);
  const [pieData, setPieData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("purchases");
    if (stored) {
      const purchases = JSON.parse(stored);

      const productMap = {};
      const categoryMap = {};

      // Recorrer todas las compras y construir los datasets
      purchases.forEach((purchase) => {
        purchase.items.forEach((item) => {
          const { title, quantity, price, category } = item;
          const q = parseInt(quantity);
          const p = parseFloat(price);
          const subtotal = q * p;

          // Dataset para gráfico de barras
          if (productMap[title]) {
            productMap[title] += q;
          } else {
            productMap[title] = q;
          }

          // Dataset para gráfico de pastel
          const cat = category || "Sin categoría";
          if (categoryMap[cat]) {
            categoryMap[cat] += subtotal;
          } else {
            categoryMap[cat] = subtotal;
          }
        });
      });

      // Convertir los datos
      const barChart = Object.entries(productMap).map(([title, quantity]) => ({
        title,
        quantity,
      }));

      const pieChart = Object.entries(categoryMap).map(([name, total]) => ({
        name,
        value: parseFloat(total.toFixed(2)),
      }));

      setBarData(barChart);
      setPieData(pieChart);
    }
  }, []);

  return (
    <div className="p-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Gráficos de Compras</h2>
        <Button variant="secondary" onClick={() => navigate("/")}>
          Volver al historial
        </Button>
      </div>

      {barData.length === 0 && pieData.length === 0 ? (
        <p>No hay datos para mostrar.</p>
      ) : (
        <Row>
          {/* Gráfico de barras */}
          <Col md={6} className="mb-4">
            <h5>Cantidad por Producto</h5>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={barData} layout="vertical" margin={{ top: 20, right: 30, left: 100, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="title" type="category" />
                <Tooltip />
                <Legend />
                <Bar dataKey="quantity" fill="#0d6efd" name="Cantidad Comprada" />
              </BarChart>
            </ResponsiveContainer>
          </Col>

          {/* Gráfico de pastel */}
          <Col md={6} className="mb-4">
            <h5>Gasto por Categoría</h5>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={130}
                  label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                >
                  {pieData.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Col>
        </Row>
      )}
    </div>
  );
};
