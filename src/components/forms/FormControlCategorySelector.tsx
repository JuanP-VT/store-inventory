import React from "react";
import Form from "react-bootstrap/esm/Form";
import useGetCategoriesList from "../../hooks/useGetCategoriesList";

type Props = {
  setState: React.Dispatch<React.SetStateAction<string>>;
};

function FormControlCategorySelector({ setState }: Props) {
  const categoryList = useGetCategoriesList();
  return (
    <Form.Group controlId="productCategory">
      <Form.Label>Category</Form.Label>
      <Form.Select onChange={(e) => setState(e.currentTarget.value)}>
        <option>No Category</option>
        {categoryList.map((item, index) => (
          <option key={`catList-${index}`}>{item.name}</option>
        ))}
      </Form.Select>
    </Form.Group>
  );
}

export default FormControlCategorySelector;
