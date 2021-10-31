import React from "react";
import { Row, Col, Form, Container } from "react-bootstrap";
import { RadioInput } from "../Library/inputs/RadioInput";

const ScoreLine = (props: any) => {

  const onClick = (event: any) => {

    props.onClick(event)
  };

  const radioButtonGroup = [] as any[];
  for (var i = 1; i <= 10; i++) {
    radioButtonGroup.push(<RadioInput key={i} inline={true} onClick={onClick} value={i}/>);
  }

  const scoreLine = props.selectedReview.questions.map((question: any) => (
    <>
      <Row className="justify-content-center">
        <p>
          <strong>{question.id}</strong>
          {question.text}
        </p>
      </Row>
      <Row className="mb-3 justify-content-center">
        <Col md={1} className="text-center">1</Col>
        <Col md="auto">
          <Form>
            <Form.Group controlId={"radio-"+question.id}>{radioButtonGroup}</Form.Group>
          </Form>
        </Col>
        <Col md={1} className="text-center">10</Col>
      </Row>
    </>
  ));

  return (
    <Container className="mb-3 mt-2" fluid>
      <Row className="justify-content-center">
        <p>
          <strong>{props.selectedReview.label} Rating</strong>
        </p>
      </Row>
      {scoreLine}
    </Container>
  );
};

export { ScoreLine };
