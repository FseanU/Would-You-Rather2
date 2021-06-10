import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isMobile } from "react-device-detect";
import { handleAnswerQuestion } from "../../actions/questions";
import { createSelector } from "reselect";
import * as Styled from "./style";

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
    <Styled.Container>
      <form onSubmit={handleSubmit}>
        <Styled.AuthorInfo>
          <Styled.AuthorImg
            src={require(`../../${avatar}`)}
            alt={`Avatar of ${author.name}`}
          />
          <Styled.TextCon>
            <Styled.Text>{author.name} asks:</Styled.Text>
            <Styled.Title>Would You Rather</Styled.Title>
          </Styled.TextCon>
        </Styled.AuthorInfo>
        <Styled.OptionCon>
          {/* option one */}
          <Styled.Input
            type="radio"
            value="optionOne"
            name="answer"
            onChange={handleChange}
            id="optionOne"
          />
          <Styled.Label
            htmlFor="optionOne"
            selected={answer === "optionOne"}
            gridColumn={isMobile ? "1/13" : "1/5"}
          >
            {optionOneText}
          </Styled.Label>

          {isMobile ? <Styled.Or>or</Styled.Or> : <Styled.VerticalLine />}

          {/* option two */}
          <Styled.Input
            type="radio"
            value="optionTwo"
            name="answer"
            onChange={handleChange}
            id="optionTwo"
          />
          <Styled.Label
            htmlFor="optionTwo"
            selected={answer === "optionTwo"}
            gridColumn={isMobile ? "1/13" : "7/11"}
          >
            {optionTwoText}
          </Styled.Label>
        </Styled.OptionCon>

        <Styled.FlexCon>
          <Styled.Button type="submit" disabled={answer === undefined}>
            Submit
          </Styled.Button>
        </Styled.FlexCon>
      </form>
    </Styled.Container>
  );
};

export default AnswerQuestion;
