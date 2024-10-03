import React from "react";
import { Image, Skeleton, Space, Table, Tag } from "antd";
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
    render: (_, item) => {
      return (
        <>
          <Image width={50} src={item.imageUrl} />
        </>
      );
    },
  },
  {
    title: "Tình trạng",
    key: "available",
    dataIndex: "available",
    render: (_, item) => {
      return item.available ? (
        <Tag color="green">Còn hàng</Tag>
      ) : (
        <Tag color="red">Hết hàng</Tag>
      );
    },
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
      {isLoading ? (
        <Skeleton active />
      ) : (
        <Table columns={columns} dataSource={data} />
      )}
    </>
  );
};

export default ProductManagement;

// npm i antd
// tailwindcss
