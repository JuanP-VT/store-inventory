import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <Nav variant="tabs">
      <Nav.Item>
        <Nav.Link as={Link} to="/addcategory">
          Add Category
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/addproduct">
          Add Product
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/">
          View Product
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;
