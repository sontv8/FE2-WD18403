import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const ProductList = () => {
  const queryClient = useQueryClient();
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axios.get(`http://localhost:3000/products`);
      return response.data;
    },
  });

  const mutation = useMutation({
    mutationFn: async (id) => {
      await axios.delete(`http://localhost:3000/products/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });
  // console.log(mutation); //{mutate: () => {}}

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error.message}</div>;
  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      {data.map((product) => (
        <div key={product.id}>
          {product.name} - {product.price}
          <button onClick={() => mutation.mutate(product.id)}>Xoa</button>
        </div>
      ))}
    </div>
  );
};
/*
  B1: bắt sự kiện onClick khi click vào button
  B2: khi sự kiện onClick được kích hoạt thì sẽ gọi ra 1 hàm để thực thi
  B3: trong hàm này sẽ gọi ra API để xóa sản phẩm
  B4: cập nhật lại data và render lại
*/

export default ProductList;
