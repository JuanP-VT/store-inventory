import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Stack } from "react-bootstrap";
type Props = {};

function FilterProduct({}: Props) {
  return (
    <DropdownButton id="dropdown-item-button" title="Filter">
      <Form>
        <Form.Group>
          <Form.Label>Categorie</Form.Label>
          <Form.Select></Form.Select>
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text"></Form.Control>
        </Form.Group>
        <Stack direction="horizontal" gap={2} className="p-2">
          <Button size="sm">Search</Button>
          <Button size="sm">Reset Filters</Button>
        </Stack>
      </Form>
    </DropdownButton>
  );
}

export default FilterProduct;
