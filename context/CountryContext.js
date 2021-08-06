import React, { createContext, useState } from "react";
const CountryContext = createContext();

const CountryProvider = ({ children }) => {
  const [country, setCountry] = useState([]);
  const [page, setPage] = useState(1);

  const countryFind = (name) => {
    return country.find((country) => {
      return country.name === name;
    });
  };

  const dark = {
    bg: "rgba(32,45,54,255)",
    text: "hsl(0, 0%, 100%)",
    el: "rgba(43,55,67,255)",
    span: "hsl(0, 0%, 52%)",
  };
  const light = {
    bg: "hsl(0, 0%, 98%)",
    text: "hsl(200, 15%, 8%)",
    el: "hsl(0, 0%, 100%)",
    span: "hsl(0, 0%, 52%)",
  };
  const [color, setColor] = useState(light);
  const colorDecider = (bool) => {
    console.log("bool = ", bool);
    if (bool) {
      setColor(light);
    }
    if (!bool) {
      setColor(dark);
    }
  };

  return (
    <CountryContext.Provider
      value={{
        country,
        setCountry,
        countryFind,
        colorDecider,
        color,
        page,
        setPage,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export { CountryContext, CountryProvider };
