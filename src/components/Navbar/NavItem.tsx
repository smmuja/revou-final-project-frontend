import { Link } from "react-router-dom";

const NavItem = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>

      <Link to="/user">User</Link>
      <Link to="/user/id">User Detail</Link>
      <Link to="/user/:id/edit">User Edit</Link>

      <Link to="/business">Business</Link>
      <Link to="/business/id">Business Detail</Link>
      <Link to="/business/add">Business Add</Link>
      <Link to="/business/id/edit">Business Edit</Link>

      <Link to="/product">Product</Link>
      <Link to="/product/id">Product Detail</Link>
      <Link to="/product/add">Product Add</Link>
      <Link to="/product/id/edit">Product Edit</Link>
    </>
  );
};

export default NavItem;
