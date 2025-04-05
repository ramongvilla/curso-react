import { Product } from "./Product";

export const Layout = ({ products }) => (
    <div className="row mt-4">
      {products.map((product) => (
        <Product key={product.sku} product={product} />
      ))}
    </div>
  );