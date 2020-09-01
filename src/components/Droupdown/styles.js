import styled from "styled-components";

export const SearchFiled = styled.input`
  padding: 7px;
  border: 1px solid #cdc;
  width: 80%;
  color: #5a5555;
  border-radius: 4px;
  line-height: 18px;
  font-size: 24px;
  text-transform: capitalize;
  margin: 10px auto;
`;
export const SearchContainer = styled.div`
  width: 40%;
  margin: 10px auto;
  border: 2px solid #9a9797d6;
  border-radius: 7px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px auto;
`;

export const ListItem = styled.li`
  cursor: pointer;
  display: list-item;
  font-size: 20px;
  font-weight: bold;
  text-transform: capitalize;
`;
export const ViewMoreDetail = styled.li`
  margin: -3.4% 0px 0px 42%;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
`;

export const NotFountList = styled.span`
  padding: 19px;
  font-weight: 700;
  text-transform: capitalize;
`;

export const AddNewCountry = styled.button`
  padding: 10px;
  border: 0;
  font-size: 14px;
  background: #73dbdbad;
  color: #252424;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #0fccccb5;
    color: #000;
  }
`;
