import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";

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
    <div className="form-container mt-72">
      <h1>Create New Question</h1>
      {/* <p>Complete the question:</p> */}
      <h3 className="mt-48">Would you rather...</h3>
      <form className="mt-24" onSubmit={handleSubmit}>
        <textarea
          name="optionOne"
          placeholder="Enter Option One Text Here"
          value={options.optionOne}
          onChange={handleInputChange}
          maxLength={200}
          className="mt-8 p-8"
        />
        <p className="mt-8">OR</p>
        <textarea
          name="optionTwo"
          placeholder="Enter Option Two Text Here"
          value={options.optionTwo}
          onChange={handleInputChange}
          maxLength={200}
          className="mt-8 p-8"
        />
        <button
          type="submit"
          disabled={options.optionOne === "" || options.optionTwo === ""}
          className="mt-40"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewQuesetion;
