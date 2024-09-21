import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`http://localhost:3000/products`);
      setProducts(response.data);
    })();
  }, []);
  return (
    <>
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
