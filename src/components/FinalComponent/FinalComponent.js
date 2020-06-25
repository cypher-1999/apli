import React from "react";
import "../../App.css";
import { Fade } from "react-animation-components";
const FinalComponent = (props) => {
  const { questions, ques_no } = props.state;
  console.log(ques_no);
  const question = questions.map((que, id) => {
    if (id !== 5) {
      return (
        <tr>
          <th scope="row">{que.id}</th>

          <td>
            <Fade in>{que.statement}</Fade>
          </td>

          <td>
            <Fade in>{que.grade}/5</Fade>
          </td>

          <td>
            <Fade in>{que.comment}</Fade>
          </td>
        </tr>
      );
    } else return <div></div>;
  });
  return (
    <div className="container row mt-5 ml-2">
      <table class="table  table-bordered table-set">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Question</th>
            <th scope="col">Grade</th>
            <th scope="col">Comment</th>
          </tr>
        </thead>
        <tbody>{question}</tbody>
      </table>
    </div>
  );
};

export default FinalComponent;
