import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("Enter the text");

  const onInput = (event) => {
    setText(event.target.value);
  };
  const ClearAll = (event) => {
    setText((event.target.value = ""));
  };

  const convert_to_up = () => {
    setText(text.toUpperCase());
  };
  const convert_to_lower = () => {
    setText(text.toLowerCase());
  };

  return (
    <>
      <div className="container my-4">
        <div className="mb-3">
          <center>
            <h5>{props.FormLabel}</h5>
          </center>
          <form action="">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="10"
              value={text}
              onChange={onInput}
            ></textarea>
          </form>
        </div>
        <center>
          <button
            type="button"
            className="btn btn-primary mx-1 my-2"
            onClick={convert_to_up}
          >
            Convert To UpperCase
          </button>
          <button
            type="button"
            className="btn btn-secondary "
            onClick={convert_to_lower}
          >
            Convert To LowerCase
          </button>
          <br />
          <button
            type="reset"
            className="btn btn-danger mx-1 my-2"
            onClick={ClearAll}
          >
            Clear All
          </button>
        </center>
      </div>
      <hr />
      <div className="container my-1">
        <center>
          <h4 className="my-3">Your Text Summary</h4>
          <p>
            Total Words -{" "}
            {
              text
                .replace(/\n/g, " ")
                .split(" ")
                .filter((value) => value !== "").length
            }
          </p>
          <p>Total Characters - {text.trim().length}</p>
          <p>
            Reading Time -{" "}
            {0.008 *
              text
                .replace(/\n/g, " ")
                .split(" ")
                .filter((value) => value !== "").length +
              " Minutes"}
          </p>
        </center>
      </div>
    </>
  );
}
TextForm.propTypes = {
  FormLabel: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  FormLabel: "set form label here",
};
