import React from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import { ValidateTypePicker } from "./components/ValidateTypePicker";
import { UserPicker } from "./components/UserPicker";
import { RatingModal } from "./components/RatingModal";
import { Summary } from "./components/Summary";
import { ReviewTypes } from "./data/constants";

const App = () => {
  const reviewCount = 4;
  const selectedReviews = ReviewTypes.filter((review: any) => review.id !== 100).map((review: any) => review);

  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <ValidateTypePicker />
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
