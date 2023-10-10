import React from "react";
import PropTypes from "prop-types";

export default function Footer(props) {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <div className="card">
        <center>
          <div className="card-body">
            <h6 className="card-title mx-3">
              Copyright © {year} by {props.DeveloperName} All Rights Reserved
            </h6>
          </div>
        </center>
      </div>
    </>
  );
}

Footer.PropType = {
  DeveloperName: PropTypes.string,
};
