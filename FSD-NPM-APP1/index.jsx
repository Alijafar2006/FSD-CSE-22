import React from "react";
import ReactDOM from "react-dom/client"; // modern API

function Book() {
  return (
    <div className="book">
      <img
        src="https://tse1.mm.bing.net/th/id/OIP.fb3XUyyDMKbDqACK72WxuwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        width="100"
        height="100"
        alt="Book image"
      />
      <h2>Title: ReactJS</h2>
      <h2>Price: 468/-</h2>
      <button>Add To Cart</button>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Book />
    </div>
  );
}

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(<App />);
