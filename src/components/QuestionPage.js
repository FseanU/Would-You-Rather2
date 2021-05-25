import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import AnswerQuestion from "./AnswerQuestion";
import QuestionResults from "./QuestionResults";

const QuestionPage = (props) => {
  const { id } = props.match.params;
  const authedUser = useSelector((state) => state.authedUser);
  const questions = useSelector((state) => state.questions);
  const isQuestionExist = questions[id];
  const optionOneVotedArr = isQuestionExist
    ? questions[id].optionOne.votes
    : "";
  const optionTwoVotedArr = isQuestionExist
    ? questions[id].optionTwo.votes
    : "";
  const isUserVoted = (user) => {
    return optionOneVotedArr.includes(user) || optionTwoVotedArr.includes(user);
  };

  if (!isQuestionExist) {
    return <Redirect to="/404" />;
  }

  return (
    <>
      {isUserVoted(authedUser) ? (
        <QuestionResults id={id} />
      ) : (
        <AnswerQuestion id={id} />
      )}
    </>
  );
};

export default QuestionPage;
