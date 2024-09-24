import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});

  useEffect(() => {
    (async () => {
      const response = await axios.get(`http://localhost:3000/products`);
      setProducts(response.data);
    })();
  }, []);

  const onHandleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newProduct = { ...product, [name]: value };
    // computed property name
    setProduct(newProduct);
  };
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `http://localhost:3000/products`,
      product
    );

    setProducts([...products, response.data]);
  };
  return (
    <>
      {JSON.stringify(product)}
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
      <h1>Danh sách sản phẩm</h1>
      {products.map((product) => (
        <div key={product.id}>
          {product.name} - {product.price}
        </div>
      ))}
    </>
  );
}

export default App;
