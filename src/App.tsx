import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import AddCategorie from "./components/NavBar/categories/AddCategorie";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/addcategorie" element={<AddCategorie />} />
      </Routes>
    </>
  );
}

export default App;
