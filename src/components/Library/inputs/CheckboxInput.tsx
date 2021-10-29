import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const CheckboxInput = (props: any) => (
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label={props.label} />
  </Form.Group>
);

CheckboxInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  index: PropTypes.number,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  value: PropTypes.bool
};

CheckboxInput.defaultProps = {
  name: "check",
  value: false,
};

export { CheckboxInput };
