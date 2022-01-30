import { CountryContext } from "context/CountryContext";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import s from "./Card.module.css";

const Card = ({ item: { flag, name, population, capital, region } }) => {
  const { color } = useContext(CountryContext);
  const router = useRouter();

  return (
    <div
      className={s.card}
      style={{ color: color.text }}
      onClick={() => router.push(`/country/${name["common"]}`)}
    >
      <Image src={flag} alt={name["common"]} width="260px" height="170px" />
      <div className={s.info}>
        <p className={s.title}>{name["common"]}</p>
        <p className={s.value}>
          Population:<span className={s.span}>{population}</span>
        </p>
        <p className={s.value}>
          Region:<span className={s.span}>{region}</span>
        </p>
        <p className={s.value}>
          Capital:
          <span className={s.span} style={{ color: color.span }}>
            {capital}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Card;
