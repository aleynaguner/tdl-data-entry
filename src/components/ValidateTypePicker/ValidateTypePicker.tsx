import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { CheckboxInput } from "../Library/inputs/CheckboxInput";

const ValidateTypePicker = () => {
  const [validateTypesInfo, setValidateTypesInfo] = useState<any>();

  const validateTypes = [
    {id:0, label:"Performance Review"},
    {id:1, label:"Engagement Review"},
    {id:2, label:"Absenteism Review"},
    {id:3, label:"Tenure"},
    {id:4, label:"360 Reviews"},
    {id:5, label:"Select All"},
  ]

  useEffect(() => {
    const validateTypesInfo = validateTypes && validateTypes.map((validateType: any, index: number) => (
      <CheckboxInput
        index={index + 1}
        label={validateType.label}
        name="check"
      />
    ))
    setValidateTypesInfo(validateTypesInfo);
  }, [validateTypes])

  return (
    <div>
      <p>How would you like to validate profiles ?</p>
      <Form>
        {validateTypesInfo}
      </Form>
    </div>
  );
};

export { ValidateTypePicker };
