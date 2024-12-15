"use client";

import { fetchListOfProducts } from "@/actions";
import React, { useEffect, useState } from "react";

const ClientPageExample = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getListOfProducts = async () => {
    const data = await fetchListOfProducts();
    if (data) {
      setProducts(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    getListOfProducts();
  }, []);

  if (loading) return <h3>Loading...</h3>;
  return (
    <div>
      <h1>Server Action Examples - Client Component</h1>
      <ul>
        {products &&
          products.length > 0 &&
          products.map((product) => <li key={product.id}>{product.title}</li>)}
      </ul>
    </div>
  );
};

export default ClientPageExample;
