import { ArrowRight } from "components/Icons";
import { CountryContext } from "context/CountryContext";
import React, { useContext } from "react";
import s from "./Pagination.module.css";
const Pagination = () => {
  const { page, setPage } = useContext(CountryContext);
  console.log("page = ", page);
  return (
    <div className={s.container}>
      {[...Array(10)].map((e, i) => (
        <div
          key={i}
          className={s.number}
          style={{ backgroundColor: page === i + 1 ? "#ccc" : "#eeeaea52" }}
          onClick={() => setPage(i + 1)}
        >
          <p index={i}>{i + 1}</p>
        </div>
      ))}
      <div className={s.number} style={{ backgroundColor: "#eeeaea52" }}>
        <ArrowRight />
      </div>
    </div>
  );
};

export default Pagination;
