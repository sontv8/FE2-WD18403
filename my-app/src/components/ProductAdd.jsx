import React from "react";

const ProductAdd = ({ onHandleChange, onHandleSubmit }) => {
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
