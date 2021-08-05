import { CountryContext } from "context/CountryContext";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import s from "./Card.module.css";

const Card = ({ item }) => {
  const { color } = useContext(CountryContext);

  const router = useRouter();

  return (
    <div
      className={s.card}
      style={{ color: color.text }}
      onClick={() => router.push(`/country/${item.name}`)}
    >
      <Image src={item?.flag} width="260px" height="170px" />
      <div className={s.info}>
        <p className={s.title}>{item?.name}</p>
        <p className={s.value}>
          Population:<span className={s.span}>{item?.population}</span>
        </p>
        <p className={s.value}>
          Region:<span className={s.span}>{item?.region}</span>
        </p>
        <p className={s.value}>
          Capital:
          <span className={s.span} style={{ color: color.span }}>
            {item?.capital}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Card;
