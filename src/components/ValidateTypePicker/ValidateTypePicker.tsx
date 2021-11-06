import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { CheckboxInput } from "../Library/inputs/CheckboxInput";
import { ReviewTypes } from "../../data/constants";

const ValidateTypePicker = (props: any) => {
  const reviewTypes = ReviewTypes.filter(
    (review: any) => review.id !== 100
  ).map((review: any) => review);

  const [reviewTypesInfo, setReviewTypesInfo] = useState<any>();
  const [isSelectAllChecked, setIsSelectAllChecked] = useState(false);
  const [checkedReviewTypes, setCheckedReviewTypes] = useState<any>([]);

  const onClick = (event: any) => {
    debugger;
    if (event.target.id === "100") {
      setIsSelectAllChecked(event.target.checked);
      event.target.checked
        ? setCheckedReviewTypes(reviewTypes)
        : setCheckedReviewTypes([]);
    }

    console.log(checkedReviewTypes);

    if (event.target.checked) {
      setCheckedReviewTypes([
        checkedReviewTypes.push(
          reviewTypes
            .filter((reviewType: any) => reviewType.id == event.target.id)
            .map((reviewType: any) => reviewType)
        ),
      ]);
    } else {
      console.log(
        setCheckedReviewTypes(
          checkedReviewTypes  
            .filter(
              (checkedReviewType: any) =>
                checkedReviewType.id !== event.target.id
            )
            .map((reviewType: any) => reviewType)
        )
      );
      setCheckedReviewTypes(
        checkedReviewTypes
          .filter(
            (checkedReviewType: any) => checkedReviewType.id !== event.target.id
          )
          .map((reviewType: any) => reviewType)
      );
    }
  };

  useEffect(() => {
    const reviewTypesInfo =
      ReviewTypes &&
      ReviewTypes.map((reviewType: any) => (
        <CheckboxInput
          id={reviewType.id}
          value={reviewType}
          label={reviewType.label}
          onClick={onClick}
          {...(isSelectAllChecked && { checked: isSelectAllChecked })}
          disabled={reviewType.id !== 100 && isSelectAllChecked}
          {...(reviewType.id !== 100 && { className: "text-primary" })}
        />
      ));
    setReviewTypesInfo(reviewTypesInfo);
  }, [isSelectAllChecked]);

  useEffect(() => {}, [checkedReviewTypes]);

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
