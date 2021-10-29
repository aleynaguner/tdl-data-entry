import React from "react";
import PropTypes from "prop-types";
import { Button } from 'react-bootstrap';

const ReviewPaginationButton = (props: any) => (
    <Button id={props.id} onClick={props.onClick} disabled={props.disabled} size="sm">{props.text}</Button>
  );
  
  ReviewPaginationButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
  };
  
  export { ReviewPaginationButton };