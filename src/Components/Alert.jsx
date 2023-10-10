import React from "react";
import PropTypes from "prop-types";

export default function Alert(props) {
  return (
    <>
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>{props.alert}</strong>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
}

Alert.prototypes = {
  alert: PropTypes.string.isRequired,
};

Alert.defaultProps = {
  alert: "set alert message here",
};
