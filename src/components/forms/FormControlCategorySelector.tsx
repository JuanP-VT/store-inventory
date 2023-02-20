import { useState, useEffect } from "react";
import Form from "react-bootstrap/esm/Form";
import useGetCategoriesList from "../../hooks/useGetCategoriesList";

type Props = {
  state: any;
  setNewProperty: React.Dispatch<React.SetStateAction<any>>;
};

function FormControlCategorySelector({ state, setNewProperty }: Props) {
  const categoryList = useGetCategoriesList();
  return (
    <Form.Group controlId="productCategory">
      <Form.Label>Category</Form.Label>
      <Form.Select
        onChange={(e) => setNewProperty({ ...state, category: e.target.value })}
      >
        <option>No Category</option>
        {categoryList.map((item, index) => (
          <option key={`catList-${index}`}>{item.name}</option>
        ))}
      </Form.Select>
    </Form.Group>
  );
}

export default FormControlCategorySelector;
