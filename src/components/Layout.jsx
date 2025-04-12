import { Product } from "./Product";

export const Layout = ({ products = [] }) => {

  console.log(products);
  
  return (
    <div className="row mt-4">
      {products?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
