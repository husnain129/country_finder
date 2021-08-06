import { ArrowLeft } from "components/Icons";
import Navbar from "components/navbar/Navbar";
import { CountryContext } from "context/CountryContext";
import useCountry from "hooks/useCountry";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import s from "./Country.module.css";

const Country = () => {
  const router = useRouter();
  const { name } = router.query;
  const { countryFind, color } = useContext(CountryContext);
  const [item, setItem] = useState();
  const [img, setImg] = useState();
  let api = useCountry();

  useEffect(() => {
    let data = countryFind(name);
    if (name !== undefined && name && data === undefined) {
      (async () => {
        await api.byName(name).then((res) => {
          setImg(res[0].flag);
          setItem(res[0]);
        });
      })();
    }
    if (data !== undefined) {
      setImg(data.flag);
      setItem(data);
    }
  }, [name, api, countryFind]);

  item && console.log("img", img);
  item && console.log("item", item);
  return (
    <>
      <Navbar />
      <div className={s.container} style={{ backgroundColor: color.bg }}>
        <div className={s.backContainer} style={{ color: color.text }}>
          <div
            className={s.back}
            onClick={() => router.back()}
            style={{ backgroundColor: color.el }}
          >
            <ArrowLeft />
            <p>Back</p>
          </div>
        </div>
        <div className={s.row} style={{ color: color.text }}>
          <div className={s.imgContainer}>
            {img && (
              <Image
                src={img}
                prop={item?.name}
                width="560px"
                height="410px"
                className={s.img}
              />
            )}
          </div>
          <div className={s.contentContainer}>
            <p className={s.title}>{item?.name}</p>
            <div className={s.detailsContainer}>
              <div className={s.detail_left}>
                <p>
                  Native Name: <span>{item?.name}</span>
                </p>
                <p>
                  Population:<span> {item?.population}</span>
                </p>
                <p>
                  Region:<span> {item?.region}</span>
                </p>
                <p>
                  Sub Region:<span> {item?.subregion}</span>
                </p>
                <p>
                  Capital:<span> {item?.capital}</span>
                </p>
              </div>
              <div className={s.detail_right}>
                <p>
                  Top Level Domain: <span>{item?.topLevelDomain[0]}</span>
                </p>
                <p>
                  Currencies: <span>{item?.currencies[0].code}</span>
                </p>
                <p>
                  Language: <span>{item?.languages[0].name}</span>
                </p>
              </div>
            </div>
            <div className={s.bottom}>
              <p>Border:</p>
              <div className={s.bottom_val}>
                {item?.borders.map((e, i) => (
                  <p
                    className={s.border}
                    key={i}
                    style={{ backgroundColor: color.el }}
                  >
                    {e}
                  </p>
                ))}
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Country;
