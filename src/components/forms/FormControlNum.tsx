import React from "react";
import Form from "react-bootstrap/esm/Form";

type Props = {
  setState: React.Dispatch<React.SetStateAction<number | null>>;
  defaultEmptyValue: 0 | null;
  label?: string;
  id?: string;
  required?: boolean;
  disabled?: boolean;
  value?: string | number | string[];
  placeholder?: string;
};
function FormControlNum({
  label,
  setState,
  id,
  required,
  defaultEmptyValue,
  disabled,
  value,
  placeholder,
}: Props) {
  return (
    <Form.Group controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        required={required}
        type="number"
        onChange={(e) => {
          defaultEmptyValue == 0
            ? setState(e.target.value === "" ? 0 : parseInt(e.target.value))
            : setState(e.target.value === "" ? null : parseInt(e.target.value));
        }}
      />
      <Form.Control.Feedback>Looks good</Form.Control.Feedback>
    </Form.Group>
  );
}

export default FormControlNum;
