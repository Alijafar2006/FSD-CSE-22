const Navbar = ({ cartCount = 0 }) => {
  return (
    <nav className="navbar">
      <div className="brand">BookNest</div>
      <div className="nav-links">
        <a href="#books">Books</a>
        <a href="#cart">Cart ({cartCount})</a>
      </div>
    </nav>
  );
};

export default Navbar;