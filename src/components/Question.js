import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createSelector } from "reselect";
import { formatQuestion } from "../utils/helpers";

const getQuestion = (state, props) => state.questions[props.id];
const getAuthedUser = (state) => state.authedUser;
const getUsers = (state) => state.users;

const selectQuestion = createSelector(
  [getQuestion, getAuthedUser, getUsers],
  (question, authedUser, users) => {
    const formatedQuestion = formatQuestion(
      question,
      users[question.author],
      authedUser
    );

    return question ? formatedQuestion : null;
  }
);

const Question = (props) => {
  const question = useSelector((state) => selectQuestion(state, props));
  const { name, optionOne, id, avatar } = question;

  if (question === null) {
    return <p>This Question doesn't exist</p>;
  }

  return (
    <Link to={`/questions/${id}`}>
      <div className="question-card">
        <div className="card-info">
          <img src={require(`../${avatar}`)} alt={`Avatar of ${name}`} />
          <div className="ml-8">
            <h2>Would you rather</h2>
            <p className="author">{`Asked by ${name}`}</p>
            <div className="line-bottom-black mt-8 mb-16"></div>
            <p>{`...${optionOne.text}...`}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Question;
