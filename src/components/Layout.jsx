import { Product } from "./Product";

export const Layout = ({ products = [] }) => {

  console.log(products);
  
  return (
    <div className="grid-items">
      {products?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
