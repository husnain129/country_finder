import Navbar from "components/navbar/Navbar";
import { CountryContext } from "context/CountryContext";
import UseCountry from "hooks/UseCountry";
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
  let api = UseCountry();
  useEffect(() => {
    let data = countryFind(name);
    if (name !== undefined && name && data === undefined) {
      console.log("asdlakjdlasdlkjaldjlsj");
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
  }, [name]);
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-left"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <p>Back</p>
          </div>
        </div>
        <div className={s.row} style={{ color: color.text }}>
          <div className={s.imgContainer}>
            {img && (
              <Image src={img} width="560px" height="410px" className={s.img} />
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
                  <p className={s.border} key={i}>
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
