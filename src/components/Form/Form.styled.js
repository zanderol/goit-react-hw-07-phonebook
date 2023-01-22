import styled from 'styled-components';

const Form = styled.form`
  width: 600px;
  height: 250px;
  background-color: ${props => props.theme.main};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  margin: 20px auto;
  border-radius: 10px;
`;
// const LabelForm = styled.label`
//   font-size: 22px;
//   text-align: start;
//   margin-bottom: 5px;
// `;

const LabelInput = styled.input`
  max-width: 80%;
  width: 200px;
  padding: 10px;
  margin: 10px;
  color: teal;

  border: 1px solid transparent;
  border-radius: 5px;
  outline: none;
  box-shadow: 0px 2px 5px rgb(100, 100, 100);

  color: ${props => props.theme.text};
  background-color: ${props => props.theme.input};

  @media screen and (min-width: 768px) {
    max-width: 60%;
    font-size: 16px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 50%;
  }
`;

const ButtonSubmit = styled.button`
  margin: 10px 0;
  padding: 8px;
  color: #13132e;
  background-color: #ccca41;
  max-width: 90px;
  font-size: 14px;
  border: none;
  border-radius: 5px;

  transition: all 0.3s;
  @media screen and (min-width: 768px) {
    max-width: 150px;
    font-size: 18px;
  }
  &:hover:not(:disabled) {
    cursor: pointer;
    box-shadow: red;
  }
  &:disabled {
    background-color: grey;
  }
`;

export { Form, LabelInput, ButtonSubmit };
