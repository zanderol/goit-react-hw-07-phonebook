import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* max-width: 400px; */
  margin: 0;
  margin-bottom: 40px;

  text-align: start;
`;
const LabelSearch = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
  padding: 5px;
`;
const InputSearch = styled.input`
  border: none;
  outline: none;
  padding: 10px;
  min-width: 200px;

  color: ${props => props.theme.text};
  background-color: ${props => props.theme.input};

  border: 1px solid transparent;
  border-radius: 5px;
  outline: none;
  box-shadow: 0px 2px 5px rgb(100, 100, 100);
`;

export { LabelSearch, InputSearch, SearchContainer };
