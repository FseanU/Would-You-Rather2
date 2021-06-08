import styled from "styled-components/macro";
import spacing from "../../utils/spacing";

const SignInImg = styled.img`
  grid-column: 1 / 8;
  object-fit: cover;
  max-width: 600px;

  @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
    max-width: 550px;
    grid-column: 2 / 8;
  }

  @media screen and (max-width: 480px) {
    grid-column: 7 / 13;
    object-fit: cover;
    max-width: 400px;
  }
`;

const Button = styled.button`
  padding: ${spacing[1]} ${spacing[2]};
  margin-top: ${spacing[2]};
`;

const Select = styled.select`
  margin-top: ${spacing[4]};
  padding: ${spacing[1]};
  border-radius: 8px;
  border: var(--light-grey) solid 1.5px;
  box-shadow: none;
  font-family: "Nunito";
  outline: none;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
    linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
  filter: grayscale(1);

  &:hover {
    border-color: var(--grey);
  }

  &:focus {
    border: red solid 1px;
    /* It'd be nice to use -webkit-focus-ring-color here but it doesn't work on box-shadow */
    box-shadow: 0 0 1px 1.5px rgba(59, 153, 252, 0.7);
    box-shadow: 0 0 0 1.5px -moz-mac-focusring;
    outline: none;
  }
`;

const Option = styled.option`
  border-radius: 10px;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 48px;
`;

const Form = styled.form`
  display: grid;

  @media screen and (max-width: 480px) {
    margin-top: ${spacing[3]};
  }
`;

const SignInCon = styled.div`
  grid-column: 10 / 13;
  align-self: center;

  @media screen and (max-width: 480px) {
    grid-column: 2 / 12;
    align-self: center;
    margin-top: -160pt;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin-top: ${spacing[9]};

  @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
    margin-top: -8pt;
  }

  @media screen and (max-width: 480px) {
    margin-top: 0;
    overflow: hidden;
  }
`;

export { SignInImg, Button, Select, Option, Title, Form, SignInCon, Container };
