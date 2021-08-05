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
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-moon"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </span>
          Dark Mode
        </p>
      </div>
    </div>
  );
};

export default Navbar;
