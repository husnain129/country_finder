import { Moon, Sun } from "components/Icons";
import { CountryContext } from "context/CountryContext";
import React, { useContext, useState } from "react";
import s from "./Navbar.module.css";
const Navbar = () => {
  const { color, colorDecider } = useContext(CountryContext);
  const [bool, setBool] = useState(false);
  return (
    <div
      className={s.navbar}
      style={{
        backgroundColor: color.el,
        color: color.text,
      }}
    >
      <div className={s.navbar_list}>
        <p className={s.navbar_list__title}>Where in the world?</p>
        <p
          className={s.navbar_list__subtitle}
          onClick={() => {
            setBool(!bool);
            colorDecider(bool);
          }}
        >
          <span>{bool ? <Sun /> : <Moon />}</span>
          {bool ? "Light Mode" : "Dark Mode"}
        </p>
      </div>
    </div>
  );
};

export default Navbar;
