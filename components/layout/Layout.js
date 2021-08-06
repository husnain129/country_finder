import { CountryContext } from "context/CountryContext";
import React, { useContext } from "react";
import Card from "../card/Card";
import s from "./Layout.module.css";
const Layout = () => {
  const { country } = useContext(CountryContext);

  return (
    <div className={s.container}>
      <div className={s.list}>
        {country &&
          country
            .splice(0, 16)
            .map((item, index) => <Card item={item} key={index} />)}
      </div>
    </div>
  );
};

export default Layout;
