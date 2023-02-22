import React from "react";
import Form from "react-bootstrap/esm/Form";
import useGetCategoriesList from "../../hooks/useGetCategoriesList";

type Props = {
  setState: React.Dispatch<React.SetStateAction<string>>;
  defaultValue?: string;
};

function FormControlCategorySelector({ setState, defaultValue }: Props) {
  const categoryList = useGetCategoriesList();
  return (
    <Form.Group controlId="productCategory">
      <Form.Label>Category</Form.Label>
      <Form.Select onChange={(e) => setState(e.currentTarget.value)}>
        <option>
          {defaultValue === undefined ? "No Category" : defaultValue}
        </option>
        {categoryList.map((item, index) => (
          <option
            style={{ textTransform: "capitalize" }}
            key={`catList-${index}`}
          >
            {item.name}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
}

export default FormControlCategorySelector;
