import { CountryContext } from "context/CountryContext";
import React, { useContext, useEffect, useState } from "react";
import s from "./Header.module.css";
const Header = ({ setSelect, setName }) => {
  const { color } = useContext(CountryContext);

  const [i, setI] = useState();
  useEffect(() => {
    const delayFn = setTimeout(() => {
      setName(i);
    }, 1000);
    return () => clearTimeout(delayFn);
  }, [i]);

  return (
    <div className={s.header}>
      <div className={s.header_list}>
        <div
          className={s.input_container}
          style={{ backgroundColor: color.el, border: `1px solid ${color.el}` }}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-search"
              color={color.text}
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search for a country..."
            value={i}
            className={s.input}
            onChange={(e) => setI(e.target.value)}
            style={{ color: color.text, backgroundColor: color.el }}
          />
        </div>
        <div className={s.option_container}>
          <select
            className={s.select}
            onChange={(e) => setSelect(e.target.value)}
            style={{ color: color.text, backgroundColor: color.el }}
          >
            <option className={s.option}>Africa</option>
            <option className={s.option}>Americas</option>
            <option className={s.option}>Asia</option>
            <option className={s.option}>Europe</option>
            <option className={s.option}>Oceania</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
