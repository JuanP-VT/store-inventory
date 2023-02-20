import { useEffect, useState } from "react";
import Form from "react-bootstrap/esm/Form";

type Props = {
  name: string;
  state: any;
  label?: string;
  setNewProperty: React.Dispatch<React.SetStateAction<any>>;
  id?: string;
  required?: boolean;
  feedback?: boolean;
  feedbackMessage?: string;
};
// Creates a new property in a given state object
function FormControlText({
  name,
  state,
  label,
  id,
  required,
  setNewProperty,
}: Props) {
  return (
    <Form.Group controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        name={name}
        type="text"
        required={required}
        onChange={(e) => setNewProperty({ ...state, [name]: e.target.value })}
      />

      <Form.Control.Feedback>Looks Good</Form.Control.Feedback>
    </Form.Group>
  );
}

export default FormControlText;
