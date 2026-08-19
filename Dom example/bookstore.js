const bookdata = [
  {
    Image:
      "https://images-na.ssl-images-amazon.com/images/I/51N-u8AsmdL._SX329_BO1,204,203,200_.jpg",
    price: 345,
  },
  {
    Image:
      "https://i.pinimg.com/originals/d7/5a/63/d75a636e3b432dee928217fe77e25374.png",
    price: 465,
  },
  {
    Image:
      "https://5.imimg.com/data5/IU/SQ/GD/SELLER-43618059/book-cover-page-design.jpg",
    price: 673,
  },
];

const parent = document.getElementById("book");

bookdata.forEach((book) => {
  const div = document.createElement("div");
  div.setAttribute("class", "book");

  const img = document.createElement("img");
  img.setAttribute("src", book.Image);
  img.setAttribute("height", "200px");
  img.setAttribute("width", "200px");

  const h2 = document.createElement("h2");
  h2.innerText = `Price: ${book.price}/-`;
  h2.style.color = "blue";

  const bt = document.createElement("button");
  bt.innerText = "ADD TO CART";

  div.appendChild(img);
  div.appendChild(h2);
  div.appendChild(bt);

  parent.appendChild(div);
});
