import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ReviewPaginationButton } from "../Library/buttons/index";
import { ScoreLine } from "../ScoreLine";

const RatingModal = (props: any) => {
  const [selectedQuestionsInfo, setSelectedQuestionsInfo] = useState<any>();
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(props.reviewCount);
  const [totalScore, setTotalScore] = useState<number>(0);

  const onPaginationClick = (event: any) => {
    debugger
    if (event.target.name === "prevButton" && pageIndex > 1) {
      setPageIndex(pageIndex - 1);
    }
    if (event.target.name === "nextButton" && pageIndex < pageCount) {
      setPageIndex(pageIndex + 1);
    }
  };

  const onClick = (event: any) => {
  };

  useEffect(() => {
    const selectedQuestionsInfo =
      props.selectedReviews &&
      props.selectedReviews.map((review: any) => (
        <Row className="mb-3">
          <ScoreLine
            selectedReview={review}
            pageIndex={pageIndex}
            onClick={onClick}
            totalScore={totalScore}
          />
        </Row>
      ));
    setSelectedQuestionsInfo(selectedQuestionsInfo);
  }, [props.selectedReviews]);

  useEffect(() => {

  }, [pageIndex])

  return (
    <>
      {selectedQuestionsInfo}
      {props.reviewCount > 1 && (
        <Row className="mb-3">
          <Col xs={6} md={4}>
            <ReviewPaginationButton
              name="prevButton"
              onClick={() => onPaginationClick}
              text="< Prev"
              disabled={pageIndex < 2 ? true : false}
            />
          </Col>
          <Col md={6}></Col>
          <Col xs={6} md={2}>
            <ReviewPaginationButton
              name="nextButton"
              onClick={() => onPaginationClick}
              text="Next >"
              disabled={pageIndex === pageCount ? true : false}
            />
          </Col>
        </Row>
      )}
    </>
  );
};

export { RatingModal };
