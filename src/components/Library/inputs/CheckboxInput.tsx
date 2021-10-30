import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const CheckboxInput = (props: any) => {
  const onClick = (event: any) => {
    return props.onClick(event);
  };

  const onChange = () => {
  };

  return (
    <Form.Group className="mb-1" controlId={props.id}>
      <Form.Check
        type="checkbox"
        id={props.id}
        name={props.name}
        label={props.label}
        checked={props.checked}
        disabled={props.disabled}
        onClick={onClick}
        onChange={onChange}
      />
    </Form.Group>
  );
};

CheckboxInput.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

CheckboxInput.defaultProps = {
  name: "check",
  value: false,
};

export { CheckboxInput };
