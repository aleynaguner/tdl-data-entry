import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const SelectInput = (props: any) => (
  <Form.Group className="mb-1" controlId={props.id}>
    <Form.Select>
      <option>{props.label}</option>
      {props.options.map((option: any) => (
        <option value={option.id}>{option.id + " " + option.name}</option>
      ))}
    </Form.Select>
  </Form.Group>
);

SelectInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.number,
  options: PropTypes.array,
  onSelect: PropTypes.func
};

SelectInput.defaultProps = {
  name: "check",
  value: false,
};

export { SelectInput };
