import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Categorie, Product } from "../../../interfaces";
import { useRef } from "react";
import { DropdownSelector } from "./DropDownSelector";
type Props = {
  productList: Product[];
  categorieList: Categorie[];
};

function FilterProduct({ productList, categorieList }: Props) {
  const categorieInput = useRef(null);
  const categorieListOptions = categorieList.map((categorie, index) => (
    <option key={`f${index}`}>{categorie.name}</option>
  ));
  return (
    <>
      <Dropdown className="d-inline mx-2" autoClose="outside">
        <Dropdown.Toggle id="dropdown-autoclose-outside">
          Filter Product
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Form>
            <Form.Group>
              <DropdownSelector categorieList={categorieList} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Form.Group>
            <Button size="sm" className="m-2">
              Reset Filters
            </Button>
          </Form>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default FilterProduct;
