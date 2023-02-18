import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import AddCategory from "./components/categories/AddCategory";
import AddProduct from "./components/products/AddProduct";
import ViewCategorie from "./components/categories/ViewCategorie";
import ViewProduct from "./components/products/ViewProductRoute";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/addcategorie" element={<AddCategory />} />
        <Route path="/viewcategorie" element={<ViewCategorie />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/viewproduct" element={<ViewProduct />} />
      </Routes>
    </>
  );
}

export default App;
