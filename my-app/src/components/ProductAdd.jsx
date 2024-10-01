import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductAdd = () => {
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (product) => {
      await axios.post("http://localhost:3000/products", product);
    },
    onSuccess: () => {
      navigate("/products");
    },
  });

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
    mutation.mutate(product);
  };

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label htmlFor="">Tên sản phẩm</label>
          <input
            type="text"
            name="name"
            placeholder="Tên sản phẩm"
            onInput={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Giá sản phẩm</label>
          <input
            type="text"
            name="price"
            placeholder="Giá sản phẩm"
            onInput={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Ảnh sản phẩm</label>
          <input
            type="text"
            name="imageUrl"
            placeholder="Ảnh sản phẩm"
            onInput={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Trạng thái</label>
          <input type="checkbox" name="available" onInput={onHandleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="">Mô tả</label>
          <textarea
            name="description"
            id=""
            onInput={onHandleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="">Danh mục</label>
          <select name="category" id="" onInput={onHandleChange}>
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

export default ProductAdd;

/*
  B1: lấy được dữ liệu nhập vào form
  B2: submit form -> bắt sự kiện onSubmit
  B3: call api để thêm sản phẩm mới
  B4: điều hướng về trang danh sách sản phẩm
*/
