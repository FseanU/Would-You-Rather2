import styled from "styled-components/macro";
import spacing from "../../utils/spacing";

const Text = styled.p`
  grid-column: 1 / 2;
  justify-self: center;
  margin-top: ${spacing[1]};

  @media screen and (max-width: 480px) {
    grid-column: 2 / 12;
  }
`;

const Button = styled.button`
  grid-column: 1 / 2;
  color: white;
  background-color: var(--main-color);
  border-radius: 25px;
  border: none;
  padding: 12pt;
  font-family: "Nunito";
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  margin-top: ${spacing[5]};

  &:hover {
    background-color: var(--hover-color);
  }

  &:disabled {
    opacity: 0.5;
  }
`;

const Textarea = styled.textarea`
  grid-column: 1 / 2;
  border-radius: 15px;
  border: var(--grey) solid 1.5px;
  box-shadow: none;
  font-family: "Nunito";
  outline: none;
  margin-top: ${spacing[1]};
  padding: ${spacing[1]};

  &:hover {
    border: var(--main-color) solid 1.5px;
  }

  &:focus {
    border: var(--main-color) solid 2.5px;
    padding: 7pt;
  }
`;

const Form = styled.form`
  grid-column: 4 / 10;
  justify-self: stretch;
  display: grid;
  margin-top: ${spacing[3]};

  @media screen and (max-width: 480px) {
    grid-column: 2 / 12;
  }
`;

const Title = styled.h1`
  grid-column: 4 / 10;
  font-weight: 400;
  color: var(--dark-grey);
  justify-self: center;

  @media screen and (max-width: 480px) {
    grid-column: 2 / 12;
  }
`;

const Question = styled.h3`
  grid-column: 4 / 10;
  justify-self: center;
  font-weight: 500;
  margin-top: ${spacing[6]};

  @media screen and (max-width: 480px) {
    grid-column: 2 / 12;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 0 8pt;
  justify-items: center;
  margin-top: ${spacing[9]};

  @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
    margin-top: 24pt;
  }

  @media screen and (max-width: 480px) {
    margin-top: 24pt;
  }
`;

export { Text, Button, Textarea, Form, Title, Question, Container };
