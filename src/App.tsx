import React from "react";
import "./App.css";
import { Row, Col } from "react-bootstrap";
import { ValidateTypePicker } from "./components/ValidateTypePicker";
import { UserPicker } from "./components/UserPicker";
import { RatingModal } from "./components/RatingModal";
import { ReviewPaginationButton } from "./components/Library/buttons/index";
import { Summary } from "./components/Summary";

const App = () => {
  const reviewCount = 2;

  return (
    <div className="container">
      <ValidateTypePicker />
      <UserPicker />
      <RatingModal />
      {reviewCount > 1 && (
        <Row className="mb-3">
          <Col>
            <ReviewPaginationButton text="< Prev Review" />
          </Col>
          <Col>
            <ReviewPaginationButton text="Next Review >" />
          </Col>
        </Row>
      )}
      <Summary />
    </div>
  );
};

export { App };
