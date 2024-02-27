import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  async function fetchProducts() {
    try {
      const response = await axios.get("http://localhost:4001/products");
      console.log("Response data:", response.data.data);
      if (Array.isArray(response.data.data)) {
        setProducts(response.data.data);
      } else if (response.data.data && typeof response.data.data === 'object') {
        setProducts([response.data.data]);
      } else {
        console.error("Unexpected response format:", response.data.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setError(error.toString());
    }
  }
  async function deleteProduct(id) {
    try {
      await axios.delete(`http://localhost:4001/products/${id}`);
      fetchProducts(); // Refresh the product list after deletion
    } catch (error) {
      console.error(`Error deleting product with id ${id}:`, error);
      setError(error.toString());
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <div className="app-wrapper">
        <h1 className="app-title">Products</h1>
        {error && <p>Error: {error}</p>}
      </div>
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="product" key={product.id || `product-${Math.random()}`}>
              <div className="product-preview">
                <img
                  src={product.image}
                  alt={product.name}
                  width="350"
                  height="350"
                />
              </div>
              <div className="product-detail">
                <h1>Product name: {product.name}</h1>
                <h2>Product price: {product.price} Baht</h2>
                <p>Product description: {product.description}</p>
              </div>
              <button className="delete-button" onClick={() => deleteProduct(product.id)}>x</button>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}

export default App;
