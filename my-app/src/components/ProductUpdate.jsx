import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductUpdate = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["products", id],
    queryFn: async () => {
      const response = await axios.get(`http://localhost:3000/products/${id}`);
      return response.data;
    },
  });
  const { mutate } = useMutation({
    mutationFn: async (product) => {
      await axios.put(`http://localhost:3000/products/${id}`, product);
    },
    onSuccess: () => {
      navigate("/products");
    },
  });
  useEffect(() => {
    if (data) {
      setProduct(data);
    }
  }, [data]);

  const onHandleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newProduct = {
      ...product,
      [name]: type == "checkbox" ? checked : value,
    };
    // computed property name
    setProduct(newProduct);
  };
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    mutate(product);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error.message}</div>;
  return (
    <div>
      <h1>ProductUpdate</h1>
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label htmlFor="">Tên sản phẩm</label>
          <input
            type="text"
            name="name"
            value={product.name || ""}
            placeholder="Tên sản phẩm"
            onInput={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Giá sản phẩm</label>
          <input
            type="text"
            name="price"
            value={product.price || ""}
            placeholder="Giá sản phẩm"
            onInput={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Ảnh sản phẩm</label>
          <input
            type="text"
            name="imageUrl"
            value={product.imageUrl || ""}
            placeholder="Ảnh sản phẩm"
            onInput={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Trạng thái</label>
          <input
            type="checkbox"
            name="available"
            checked={product.available || ""}
            onChange={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Mô tả</label>
          <textarea
            name="description"
            id=""
            value={product.description || ""}
            onInput={onHandleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="">Danh mục</label>
          <select
            name="category"
            id=""
            value={product.category || ""}
            onInput={onHandleChange}
          >
            <option value="" hidden></option>
            <option value="1">Danh mục 1</option>
            <option value="2">Danh mục 2</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ProductUpdate;
