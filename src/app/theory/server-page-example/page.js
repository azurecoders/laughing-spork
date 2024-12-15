import { fetchListOfProducts } from "@/actions";
import React from "react";

const ServerActionsExample = async () => {
  const products = await fetchListOfProducts();
  return (
    <div>
      <h1>Server Actions Example - Server Component</h1>
      <ul>
        {products &&
          products.length > 0 &&
          products.map((product) => <li key={product.id}>{product.title}</li>)}
      </ul>
    </div>
  );
};

export default ServerActionsExample;
