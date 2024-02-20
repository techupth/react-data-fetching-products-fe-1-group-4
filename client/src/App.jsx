import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <h1 className="app-title">Products</h1>
      </div>
      <div className="product-list">
        <div className="product">
          <div className="product-preview">
            <img
              src="https://via.placeholder.com/350/350"
              alt="some product"
              width="350"
              height="350"
            />
          </div>
          <div className="product-detail">
            <h1>Product name: ...</h1>
            <h2>Product price: ... Baht</h2>
            <p>Product description: .....</p>
          </div>

          <button className="delete-button">x</button>
        </div>
      </div>
    </div>
  );
}

export default App;
