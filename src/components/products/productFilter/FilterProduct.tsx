import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import FormControlCategorySelector from "../../forms/FormControlCategorySelector";
type Props = {
  setSelectedName: React.Dispatch<React.SetStateAction<string>>;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};

function FilterProduct({ setSelectedCategory, setSelectedName }: Props) {
  return (
    <>
      <Dropdown className="p-2 d-inline mx-2" autoClose="outside">
        <Dropdown.Toggle id="dropdown-autoclose-outside">
          Filter Product
        </Dropdown.Toggle>
        <Dropdown.Menu className="p-2">
          <Form>
            <Form.Group>
              <FormControlCategorySelector
                setState={setSelectedCategory}
                defaultValue="All"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                onChange={(e) => setSelectedName(e.currentTarget.value)}
                type="text"
              ></Form.Control>
            </Form.Group>
          </Form>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default FilterProduct;
