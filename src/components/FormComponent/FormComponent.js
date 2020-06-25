import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "../../App.css";
const FormComponent = (props) => {
  const [inProp, setInProp] = useState(false);
  const [outProp, setOutProp] = useState(false);
  if (props.number === 5) {
    return (
      <>
        <div className="col-3 col-md-1"></div>
        <div className="col-12 col-md-5 mt-5 offset-1">
          <Link to="/table">
            <button
              type="submit"
              value="Submit"
              className="btn submit-button"
              style={{ color: "white" }}
            >
              View Result
            </button>
          </Link>
        </div>
      </>
    );
  } else
    return (
      <>
        <div className="col-3 col-md-1 mt-2">
          <i
            className="btn btn-danger fa fa-angle-left "
            onClick={() => {
              props.prevQues();
              setOutProp(true);
              setTimeout(() => setOutProp(false), 400);
            }}
          ></i>
        </div>
        <div className="col-12 col-md-5 ">
          <h3 className="row row-header mt-2 justify-content-center">
            {props.question}
          </h3>
          <CSSTransition in={outProp} classNames="out" timeout={200}>
            <CSSTransition in={inProp} classNames="page" timeout={200}>
              <form onSubmit={(event) => props.handleSubmit(event)}>
                <div className="row row-content ">
                  <div className="col-8">
                    <iframe
                      frameBorder="3"
                      height="100%"
                      width="100%"
                      title="Video Player"
                      src={props.answer}
                    />
                  </div>
                  <div className="col-4">
                    Grading:
                    <div class="form-check mt-3">
                      <input
                        class="form-check-input "
                        type="radio"
                        name="radio1"
                        value="1"
                      />
                      <label class="form-check-label" for="exampleRadios1">
                        1
                      </label>
                    </div>
                    <div class="form-check mt-3">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radio1"
                        value="2"
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        2
                      </label>
                    </div>
                    <div class="form-check mt-3 ">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radio1"
                        value="3"
                      />
                      <label class="form-check-label" for="exampleRadios1">
                        3
                      </label>
                    </div>
                    <div class="form-check mt-3">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radio1"
                        value="4"
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        4
                      </label>
                    </div>
<div class="form-check mt-3">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radio1"
                        value="5"
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        5
                      </label>
                    </div>
                  </div>
                  <div className="col-md-8 mt-3 form-group ">
                    <textarea
                      type="textbox"
                      name="textbox1"
                      cols="3"
                      rows="3"
                      className="form-control"
                      placeholder="Please enter your comment here ..."
                    />
                  </div>
                  <div className="col-12 col-md-8 form-group">
                    <button
                      type="submit"
                      value="Submit"
                      className="btn submit-button float-right "
                      onClick={() => {
                        setInProp(true);
                        setTimeout(() => setInProp(false), 400);
                      }}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </CSSTransition>
          </CSSTransition>
        </div>
        <div className="col-3 col-md-1 mt-2">
          <i
            className="btn btn-success fa fa-angle-right"
            onClick={() => {
              props.nextQues();
              setInProp(true);
              setTimeout(() => setInProp(false), 400);
            }}
          ></i>
        </div>
      </>
    );
};

export default FormComponent;
