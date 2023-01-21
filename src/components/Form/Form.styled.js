import styled from 'styled-components';

const Form = styled.form`
  width: 600px;
  height: 250px;
  background-color: ${({ theme }) => theme.colors.main};
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

  @media screen and (min-width: 768px) {
    max-width: 60%;
  }
  @media screen and (min-width: 1280px) {
    max-width: 50%;
  }
`;

const ButtonSubmit = styled.button`
  margin: 10px 0;
  padding: 7px 15px;
  color: #13132e;
  background-color: #ccca41;
  max-width: 150px;
  font-size: 16px;
  font-weight: 600;

  border: 1px solid transparent;
  border-radius: 5px;
  outline: none;
  box-shadow: 0px 2px 5px rgb(100, 100, 100);

  cursor: pointer;

  color: ${({ theme }) => theme.colors.font};

  transition: all 0.3s;
  &:hover:not(:disabled) {
    cursor: pointer;
    box-shadow: 0 0 6px ${({ theme }) => theme.colors.font};
  }
  &:disabled {
    background-color: grey;
  }
`;

export { Form, LabelInput, ButtonSubmit };
