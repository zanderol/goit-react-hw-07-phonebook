import styled from 'styled-components';

const List = styled.ol`
  font-size: 18px;
  text-align: start;
`;

const ListItem = styled.li`
  padding: 2px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 320px;
  margin-bottom: 5px;

  border: 1px solid transparent;
  border-radius: 5px;
  outline: none;
  box-shadow: 0px 2px 5px rgb(100, 100, 100);

  &:last-child {
    margin-bottom: 0;
  }
  @media screen and (min-width: 768px) {
    max-width: 600px;
  }
`;
const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.main};
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.font};
  cursor: pointer;
  transition: all 250ms;

  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 0 6px ${({ theme }) => theme.colors.font};
  }
`;
const ItemInfo = styled.p`
  display: flex;
  justify-content: space-between;
`;

export { List, ListItem, DeleteButton, ItemInfo };
