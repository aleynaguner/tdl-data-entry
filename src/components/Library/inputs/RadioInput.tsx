import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const RadioInput = (props: any) => {

  const onClick = (event: any) => {
    return props.onClick(event);
  };

  const onChange = () => {};

  return (
    <Form.Check
      type="radio"
      id={props.id}
      name={props.name}
      label={props.label}
      checked={props.checked}
      disabled={props.disabled}
      value={props.value}
      inline={props.inline}
      onClick={onClick}
      onChange={onChange}
    />
  );
};

RadioInput.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  inline: PropTypes.bool,
  className: PropTypes.string,
  value: PropTypes.number,
};

RadioInput.defaultProps = {
  name: "check",
  value: false,
};

export { RadioInput };
