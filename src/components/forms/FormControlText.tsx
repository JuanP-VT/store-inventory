import React from "react";
import Form from "react-bootstrap/esm/Form";

type Props = {
  label?: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  id?: string;
  required?: boolean;
};
// Creates a new property in a given state object
function FormControlText({ label, id, required, setState }: Props) {
  return (
    <Form.Group controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type="text"
        required={required}
        onChange={(e) => setState(e.currentTarget.value)}
      />

      <Form.Control.Feedback>Looks Good</Form.Control.Feedback>
    </Form.Group>
  );
}

export default FormControlText;
