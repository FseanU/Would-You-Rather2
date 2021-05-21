import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isMobile } from "react-device-detect";
import { handleAnswerQuestion } from "../actions/questions";
import { createSelector } from "reselect";

const selectQuestions = (state) => state.questions;
const selectId = (_, id) => id;
const selectUsers = (state) => state.users;

const selectQuestionById = createSelector(
  selectQuestions,
  selectId,
  (questions, id) => questions[id]
);

const selectAuthor = createSelector(
  selectQuestionById,
  selectUsers,
  (question, users) => users[question.author]
);

const AnswerQuestion = ({ id }) => {
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState("");

  const authedUser = useSelector((state) => state.authedUser);
  const author = useSelector((state) => selectAuthor(state, id));
  const question = useSelector((state) => selectQuestionById(state, id));
  const optionOneText = question.optionOne.text;
  const optionTwoText = question.optionTwo.text;
  const avatar = author.avatarURL;

  const handleChange = (e) => {
    const { value } = e.target;
    setAnswer(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      handleAnswerQuestion({
        qid: id,
        authedUser,
        answer,
      })
    );
  };

  return (
    <div className="mt-72 answer-question">
      <form onSubmit={handleSubmit}>
        <div className="author-info">
          <img src={require(`../${avatar}`)} alt={`Avatar of ${author.name}`} />
          <div className="ml-16">
            <p>{author.name} asks:</p>
            <h1>Would You Rather</h1>
          </div>
        </div>
        <div className="options mt-64">
          {/* option one */}
          <input
            type="radio"
            value="optionOne"
            name="answer"
            onChange={handleChange}
            id="optionOne"
          />
          <label
            htmlFor="optionOne"
            className="option1"
            id={answer === "optionOne" ? "selected" : "unselected"}
          >
            {optionOneText}
          </label>

          {isMobile ? (
            <p className="or">or</p>
          ) : (
            <div className="line-right-black"></div>
          )}

          {/* option two */}
          <input
            type="radio"
            value="optionTwo"
            name="answer"
            onChange={handleChange}
            id="optionTwo"
          />
          <label
            htmlFor="optionTwo"
            className="option2"
            id={answer === "optionTwo" ? "selected" : "unselected"}
          >
            {optionTwoText}
          </label>
        </div>
        <div className="answer-question-btn mt-56">
          <button type="submit" disabled={answer === undefined}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AnswerQuestion;
