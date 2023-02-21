import React, { useRef } from "react";

import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Category, Product } from "../../../interfaces";
import { DropdownSelector } from "./DropDownSelector";
type Props = {
  productList: Product[];
  categoryList: Category[];
};

function FilterProduct({ productList, categoryList: categoryList }: Props) {
  const categoryInput = useRef(null);
  const categoryListOptions = categoryList.map((category, index) => (
    <option key={`f${index}`}>{category.name}</option>
  ));
  return (
    <>
      <Dropdown className="p-2 d-inline mx-2" autoClose="outside">
        <Dropdown.Toggle id="dropdown-autoclose-outside">
          Filter Product
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Form>
            <Form.Group>
              <DropdownSelector categoryList={categoryList} />
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
