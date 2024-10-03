import React from "react";
import { Space, Table, Tag } from "antd";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const columns = [
  {
    title: "Tên sản phẩm",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Giá sản phẩm",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Ảnh sản phẩm",
    dataIndex: "imageUrl",
    key: "imageUrl",
  },
  {
    title: "Tình trạng",
    key: "available",
    dataIndex: "available",
  },
  {
    title: "Danh mục",
    key: "category",
    dataIndex: "category",
  },
  {
    title: "Hành động",
    key: "action",
  },
];

const ProductManagement = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axios.get(`http://localhost:3000/products`);
      return response.data.map((product) => ({ ...product, key: product.id }));
    },
  });

  return (
    <>
      <h1>Product Management</h1>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default ProductManagement;
