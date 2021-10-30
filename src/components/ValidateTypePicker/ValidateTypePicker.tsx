import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { CheckboxInput } from "../Library/inputs/CheckboxInput";
import { ReviewTypes } from "../../data/constants";

const ValidateTypePicker = () => {
  const [reviewTypesInfo, setReviewTypesInfo] = useState<any>();
  const [isSelectAllChecked, setIsSelectAllChecked] = useState(false);

  const onClick = (event: any) => {
    if (event.target.id === "100") {
      setIsSelectAllChecked(event.target.checked);
    }
  };

  useEffect(() => {
    const reviewTypesInfo =
      ReviewTypes &&
      ReviewTypes.map((reviewType: any) => (
        <CheckboxInput
          id={reviewType.id}
          label={reviewType.label}
          onClick={onClick}
          {...(isSelectAllChecked && { checked: isSelectAllChecked })}
          disabled={reviewType.id !== 100 && isSelectAllChecked}
        />
      ));
    setReviewTypesInfo(reviewTypesInfo);
  }, [isSelectAllChecked]);

  return (
    <div className="mb-3">
      <p>
        <strong>How would you like to validate profiles ?</strong>
      </p>
      <Form>{reviewTypesInfo}</Form>
    </div>
  );
};

export { ValidateTypePicker };
