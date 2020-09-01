import React, { useState } from "react";
import {
  SearchFiled,
  SearchContainer,
  List,
  ListItem,
  ViewMoreDetail,
  NotFountList,
  AddNewCountry,
} from "./styles";
const filterCountry = (countryList, search) => {
  return countryList.filter((country) =>
    country.toLocaleLowerCase().startsWith(search.toLocaleLowerCase())
  );
};
const Droupdown = ({
  countryList,
  numberOfCountry,
  isAddPermission,
  OnSelection,
  addToList,
  showCompleteList,
}) => {
  const [search, setSearch] = useState("");

  const onChangeHandler = (event) => {
    setSearch(event.target.value);
  };
  const OnSelectionHandler = (value) => {
    setSearch(value);
    OnSelection(value);
  };

  return (
    <SearchContainer>
      <SearchFiled value={search} onChange={onChangeHandler} />
      <List>
        {!filterCountry(countryList, search).length && isAddPermission && (
          <li>
            <NotFountList>"{search}" not found</NotFountList>
            <AddNewCountry onClick={() => addToList(search)}>
              Add & Select
            </AddNewCountry>
          </li>
        )}
        {filterCountry(countryList, search)
          .slice(0, numberOfCountry)
          .map((country) => {
            return (
              <ListItem
                key={country}
                onClick={() => OnSelectionHandler(country)}
              >
                {country}
              </ListItem>
            );
          })}
        {filterCountry(countryList, search).length > numberOfCountry && (
          <ViewMoreDetail onClick={showCompleteList}>
            {" "}
            {filterCountry(countryList, search).length - numberOfCountry}{" "}
            more...
          </ViewMoreDetail>
        )}
      </List>
    </SearchContainer>
  );
};
Droupdown.defaultProps = {
  countryList: [],
  numberOfCountry: 4,
  isAddPermission: false,
  OnSelection: () => {},
  addToList: () => {},
  showCompleteList: () => {},
};
export default Droupdown;
