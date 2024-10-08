import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input, InputNumber, Select, Switch } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: async (product) => {
      await axios.post("http://localhost:3000/products", product);
    },
    onSuccess: () => {
      navigate("/admin/products");
    },
  });
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div>
      <h1 className="text-4xl my-8">Thêm mới sản phẩm</h1>
      <Form
        name="add-form"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Tên sản phẩm"
          name="name"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tên sản phẩm",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Giá sản phẩm"
          name="price"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập giá sản phẩm",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="Ảnh sản phẩm"
          name="imageUrl"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập ảnh sản phẩm",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Trạng thái" name="available" initialValue={false}>
          <Switch />
        </Form.Item>
        <Form.Item label="Mô tả" name="description">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Danh mục" name="category">
          <Select>
            <Select.Option value="cate1">Danh mục 1</Select.Option>
            <Select.Option value="cate2">Danh mục 2</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Button</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddProduct;
