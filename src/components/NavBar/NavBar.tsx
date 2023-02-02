import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <Nav variant="tabs">
      <Nav.Item>
        <Nav.Link as={Link} to="/addcategorie">
          Add Categorie
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/categories">
          Categories
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;
