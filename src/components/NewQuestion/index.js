import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleAddQuestion } from "../../actions/questions";
import * as Styled from "./style";

function NewQuesetion() {
  const [options, setOptions] = useState({ optionOne: "", optionTwo: "" });
  const [redirectToHome, setRedirectToHome] = useState(false);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setOptions((preOptions) => ({ ...preOptions, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { optionOne, optionTwo } = options;
    dispatch(handleAddQuestion(optionOne, optionTwo));

    setOptions({ optionOne: "", optionTwo: "" });
    setRedirectToHome(true);
  };

  if (redirectToHome) {
    return <Redirect to="/" />;
  }

  return (
    <Styled.Container>
      <Styled.Title>Create New Question</Styled.Title>
      <Styled.Question>Would you rather...</Styled.Question>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Textarea
          name="optionOne"
          placeholder="Enter Option One Text Here"
          value={options.optionOne}
          onChange={handleInputChange}
          maxLength={200}
        />
        <Styled.Text>OR</Styled.Text>
        <Styled.Textarea
          name="optionTwo"
          placeholder="Enter Option Two Text Here"
          value={options.optionTwo}
          onChange={handleInputChange}
          maxLength={200}
        />
        <Styled.Button
          type="submit"
          disabled={options.optionOne === "" || options.optionTwo === ""}
        >
          Submit
        </Styled.Button>
      </Styled.Form>
    </Styled.Container>
  );
}

export default NewQuesetion;
