function Book(props) {
  const image = React.createElement(
    "img",
    { src: props.image, width: "100px", height: "100px" },
    null,
  );
  const title = React.createElement(
    "h2",
    { style: { color: "red" } },
    "Title:" + props.title,
  );
  const price = React.createElement(
    "h2",
    { style: { color: "blue" } },
    "Price: " + props.price + "/-",
  );
  const button = React.createElement(
    "button",
    { style: { color: "Green" } },
    "AddTOCart",
  );
  const div = React.createElement(
    "div",
    { className: "book" },
    image,
    title,
    price,
    button,
  );

  return div;
}
const bookdata = [
  {
    image:
      "https://cdn.i-scmp.com/sites/default/files/d8/yp/images/catcher_in_the_rye.jpg",
    title: "ReactJS",
    price: 465,
  },
  {
    image: "https://pictures.abebooks.com/inventory/31422472170.jpg",
    title: "NodeJS",
    price: 345,
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327582271i/646175.jpg",
    title: "ExpressJs",
    price: 673,
  },
];

function App() {
  const bookstore = bookdata.map((b) => {
    return Book(b);
  });
  return React.createElement("div", { className: "bookstore" }, bookstore);
}
const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(React.createElement(App));
