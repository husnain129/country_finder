import { Check, SearchIcon } from "components/Icons";
import { CountryContext } from "context/CountryContext";
import React, { useContext, useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import s from "./Header.module.css";

const Header = ({ setSelect, setName, name }) => {
  const { color } = useContext(CountryContext);

  let [loading, setLoading] = useState(false);
  const [delay, setDelay] = useState();

  useEffect(() => {
    delay && setLoading(true);
    const delayFn = setTimeout(() => {
      setLoading(false);
      setName(delay);
    }, 1000);
    return () => clearTimeout(delayFn);
  }, [delay, setName]);

  return (
    <div className={s.header}>
      <div className={s.header_list}>
        <div
          className={s.input_container}
          style={{ backgroundColor: color.el, border: `1px solid ${color.el}` }}
        >
          <SearchIcon />
          <input
            type="text"
            placeholder="Search for a country..."
            value={delay}
            className={s.input}
            onChange={(e) => setDelay(e.target.value)}
            style={{ color: color.text, backgroundColor: color.el }}
          />

          <ClipLoader
            color={color.text}
            loading={loading}
            css={s.spinner}
            size={18}
          />
          {name && <Check />}
        </div>
        <div className={s.option_container}>
          <select
            defaultValue={"DEFAULT"}
            className={s.select}
            onChange={(e) => setSelect(e.target.value)}
            style={{ color: color.text, backgroundColor: color.el }}
          >
            <option className={s.option} value="DEFAULT" disabled>
              Select By Region
            </option>
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
