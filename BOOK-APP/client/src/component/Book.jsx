import "'./Book.css"
import img from"../assets/react.svg";
const Book = () => {
  return (
    <div classname="Book">
        <img src={imgage} width="200px" height="200px" alt="Book Image" />
        <h2>Title:ReactJs</h2>
        <h3>Author: Jafar Ali</h3>
        <h3>Price: 500</h3>

    </div>
  )
}
export default Book