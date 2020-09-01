import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Droupdown from "./components/Droupdown";
const country = [
  "India",
  "singapore",
  "australia",
  "pakistan",
  "bangladesh",
  "malaysia",
  "united states",
  "united kingdom",
  "china",
  "philippines",
  "thailand",
  "INDONESIA",
  "PORTUGAL",
  "SRI LANKA",
  "SOUTH AFRICA",
  "PERU",
  "GREECE",
  "ITALY",
  "VIETNAM",
  "TURKEY",
  "JAPAN",
  "MEXICO",
  "TANZANIA",
  "ISRAEL",
  "COLOMBIA",
  "NEW ZEALAND",
  "IRELAND",
];
function App() {
  const [countryList, setCountryList] = useState(country);
  const [showCompleteStatu, setShowCompleteList] = useState(false);
  const OnSelection = (value) => {
    console.log(value);
  };
  const addToList = (value) => {
    setCountryList([...countryList, value]);
  };
  const showCompleteList = () => {
    setShowCompleteList(true);
  };
  return (
    <div className="App">
      <Header />
      <Droupdown
        countryList={countryList}
        numberOfCountry={showCompleteStatu ? countryList.length : 6}
        isAddPermission={true}
        OnSelection={OnSelection}
        addToList={addToList}
        showCompleteList={showCompleteList}
      />
    </div>
  );
}

export default App;
