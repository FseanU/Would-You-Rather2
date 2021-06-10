import styled from "styled-components/macro";

const Container = styled.div`
  margin-top: 72pt;

  @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
    margin-top: 24pt;
  }

  @media screen and (max-width: 480px) {
    margin: 40pt 16pt;
  }

  @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
    margin: 16pt;
  }
`;

const AuthorInfo = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 480px) {
    justify-content: space-between;
    padding: 0 8pt;
  }
`;

const AuthorImg = styled.img`
  object-fit: contain;
  max-width: 80px;

  @media screen and (max-width: 480px) {
    max-width: 70px;
  }
`;

const TextCon = styled.div`
  align-self: flex-end;
  margin-left: 16pt;

  @media screen and (max-width: 480px) {
    margin: 0 4pt;
    align-self: center;
  }
`;

const Text = styled.p`
  @media screen and (max-width: 480px) {
    font-size: 16px;
    color: var(--dar-grey);
    font-weight: 300;
  }
`;

const Title = styled.h1`
  font-weight: 400;
  font-style: italic;

  @media screen and (max-width: 480px) {
    font-size: 24px;
    justify-self: flex-end;
    font-weight: 400;
    margin-left: -4pt;
  }
`;

const OptionCon = styled.div`
  grid-column: 1 / 13;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  margin-top: 32pt;

  @media only screen and (max-device-width: 736px) {
    margin-top: 16pt;
  }
`;

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  padding: 64pt 56pt;
  font-size: 24pt;
  cursor: pointer;
  font-style: italic;
  text-align: center;
  transition: color 0.5s ease-in-out;
  transition: background-color 0.5s ease-in-out;
  border: var(--main-color) 2px solid;
  border-radius: 10px;

  /* style for selected option */
  background-color: ${(props) => (props.selected ? "var(--main-color)" : "")};
  color: ${(props) => (props.selected ? "white" : "")};
  font-weight: ${(props) => (props.selected ? "600" : "")};
  box-shadow: ${(props) =>
    props.selected ? "3px 5px 15px rgba(0, 0, 0, 0.5)" : ""};
  grid-column: ${(props) => props.gridColumn};

  &:hover {
    color: white;
    background-color: var(--main-color);
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
    padding: 40pt 8pt;
  }
`;

const Or = styled.p`
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-column: 5 / 7;
    margin: 8pt 0;
  }
`;

const VerticalLine = styled.div`
  grid-column: 5 / 6;
  border-right: var(--grey) 1px solid;
  margin: 24pt 0;
`;

const FlexCon = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 56pt;

  @media screen and (max-width: 480px) {
    margin-top: 32pt;
  }
`;

const Button = styled.button`
  padding: 12pt 120pt;

  &:disabled {
    opacity: 0.6;
  }

  @media screen and (max-width: 480px) {
    padding: 12pt 100pt;
  }
`;

export {
  Container,
  AuthorInfo,
  AuthorImg,
  TextCon,
  Text,
  Title,
  OptionCon,
  Input,
  Label,
  Or,
  VerticalLine,
  FlexCon,
  Button,
};
