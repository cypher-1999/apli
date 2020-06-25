import React, { Component } from "react";
import "../../App.css";
import FormComponent from "../FormComponent/FormComponent";
import FinalComponent from "../FinalComponent/FinalComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import CardComponent from "../CardComponent/CardComponent";
class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: "0",
          statement: "Q1.Dynamic Programming ",
          answer: "https://www.youtube.com/embed/hR3s9rGlMTU",
          grade: "",
          comment: "",
        },
        {
          id: "1",
          statement: "Q2.Backtracking",
          answer: "https://www.youtube.com/embed/hR3s9rGlMTU",
          grade: "",
          comment: "",
        },
        {
          id: "2",
          statement: "Q3.Sorting",
          answer: "https://www.youtube.com/embed/hR3s9rGlMTU",
          grade: "",
          comment: "",
        },
        {
          id: "3",
          statement: "Q4.Searching",
          answer: "https://www.youtube.com/watch?v=ntCGbPMeqgg",
          grade: "",
          comment: "",
        },
        {
          id: "4",
          statement: "Q5.Recursion",
          answer: "https://www.youtube.com/embed/hR3s9rGlMTU",
          grade: "",
          comment: "",
        },
        {
          id: "5",
          statement: "None",
          answer: "https://www.youtube.com/embed/hR3s9rGlMTU",
          grade: "",
          comment: "",
        },
      ],
      ques_no: 0,
      inProp: true,
    };
  }
  handleSubmit = (event) => {
    const key = this.state.ques_no;
    const grade = event.target.radio1.value;
    const comment = event.target.textbox1.value;
    const stateCopy = Object.assign({}, this.state);
    stateCopy.questions = stateCopy.questions.slice();
    stateCopy.questions[key] = Object.assign({}, stateCopy.questions[key]);
    stateCopy.questions[key].grade = grade;
    stateCopy.questions[key].comment = comment;
    this.setState(stateCopy);
    event.preventDefault();
    event.target.reset();

    this.setState({ ques_no: this.state.ques_no + 1 });
  };
  prevQues = () => {
    this.state.ques_no !== 0
      ? this.setState({ ques_no: this.state.ques_no - 1 })
      : window.alert("first question");
  };
  nextQues = () => {
    this.state.ques_no !== 4
      ? this.setState({ ques_no: this.state.ques_no + 1 })
      : window.alert("last question");
  };
  render() {
    const questions = this.state.questions;
    const number = this.state.ques_no;
    console.log(number);
    console.log(questions);
    return (
      <>
        <div className="container mytext">
          <div className="row">
            <Switch>
              <Route exact path="/">
                <CardComponent />

                <FormComponent
                  question={questions[number].statement}
                  handleSubmit={(event) => this.handleSubmit(event)}
                  number={number}
                  answer={questions[number].answer}
                  prevQues={() => this.prevQues()}
                  nextQues={() => this.nextQues()}
                />
              </Route>
              <Route path="/table">
                <FinalComponent state={this.state} />
              </Route>
              <Redirect exact path="/" />
            </Switch>
          </div>
        </div>
      </>
    );
  }
}

export default MainComponent;
