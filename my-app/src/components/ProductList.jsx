import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const ProductList = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axios.get(`http://localhost:3000/products`);
      return response.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error.message}</div>;
  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      {data.map((product) => (
        <div key={product.id}>
          {product.name} - {product.price}
          <button>Xoa</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
