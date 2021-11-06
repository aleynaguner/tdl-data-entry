import React, { useState } from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import { ValidateTypePicker } from "./components/ValidateTypePicker";
import { UserPicker } from "./components/UserPicker";
import { RatingModal } from "./components/RatingModal";
import { Summary } from "./components/Summary";
import { ReviewTypes } from "./data/constants";

const App = () => {
  const [validateTypes, setValidateTypes] = useState<any>([]);
  const selectedReviews = ReviewTypes.filter(
    (review: any) => review.id !== 100
  ).map((review: any) => review);
  const reviewCount = selectedReviews.length;

  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <ValidateTypePicker validateTypes={validateTypes} />
        </Col>
      </Row>
      <Row>
        <Col xs={10} md={5}>
          <UserPicker />
        </Col>
      </Row>
      <RatingModal
        selectedReviews={selectedReviews}
        reviewCount={reviewCount}
      />
      <Row>
        <Col xs={12} md={8}>
          <Summary />
        </Col>
      </Row>
    </Container>
  );
};

export { App };
