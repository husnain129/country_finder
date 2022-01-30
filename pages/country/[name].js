import { ArrowLeft } from "components/Icons";
import Navbar from "components/navbar/Navbar";
import { CountryContext } from "context/CountryContext";
import UseCountry from "hooks/UseCountry";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import s from "./Country.module.css";
const Country = () => {
  const router = useRouter();
  const { name } = router.query;
  const { countryFind, color } = useContext(CountryContext);
  const [item, setItem] = useState();
  let api = UseCountry();

  useEffect(() => {
    // let data = countryFind(name);
    // console.log("data . .... ,", data);
    if (name !== undefined && name) {
      if (!item) {
        (async () => {
          await api.byName(name).then((res) => setItem(res));
        })();
      }
    }
    // if (data !== undefined) {
    //   setItem(data);
    // }
  }, [name, api, countryFind]);

  item && console.log("item = ", item);

  return !item ? (
    <p></p>
  ) : (
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
            <img
              src={item.flag}
              alt={item.name["common"]}
              width="560px"
              height="410px"
              className={s.img}
            />
          </div>
          <div className={s.contentContainer}>
            <p className={s.title}>{item.name["common"]}</p>
            <div className={s.detail_left}>
              <div className={s.detail_left__content}>
                <p>Native Name: </p>
                <p>{item.name["common"]}</p>
              </div>
              <div className={s.detail_left__content}>
                <p>Population: </p>
                <p>{item.population}</p>
              </div>

              <div className={s.detail_left__content}>
                <p>Region: </p>
                <p>{item.region}</p>
              </div>

              <div className={s.detail_left__content}>
                <p>Capital: </p>
                <p>{item.capital}</p>
              </div>

              {/* <div className={s.detail_left__content}>
                <p>Curencies: </p>
                <p>{item.curencies}</p>
              </div> */}
              <div className={s.detail_left__languages}>
                {" "}
                <p>Languages</p>
                <div
                  style={{
                    display: "flex",
                    flex: ".5",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {item.languages
                    .filter((e, idx) => idx < 2)
                    .map((e, i) => (
                      <p> {e}</p>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Country;

// <div className={s.container} style={{ backgroundColor: color.bg }}>
//         <div className={s.backContainer} style={{ color: color.text }}>
//           <div
//             className={s.back}
//             onClick={() => router.back()}
//             style={{ backgroundColor: color.el }}
//           >
//             <ArrowLeft />
//             <p>Back</p>
//           </div>
//         </div>
//         <div className={s.row} style={{ color: color.text }}>
//           <div className={s.imgContainer}>
//             <img
//               src={item.flag}
//               alt={item.name["common"]}
//               width="560px"
//               height="410px"
//               className={s.img}
//             />
//           </div>
//           <div className={s.contentContainer}>
//             <p className={s.title}>{item.name}</p>
//             <div className={s.detailsContainer}>
//               <div className={s.detail_left}>
//                 <p>
//                   Native Name: <span>{item.name["common"]}</span>
//                 </p>
//                 <p>
//                   Population:<span> {item.population}</span>
//                 </p>
//                 <p>
//                   Region:<span> {item.region}</span>
//                 </p>
//                 {/* <p>
//                   Sub Region:<span> {item.subregion}</span>
//                 </p> */}
//                 <p>
//                   Capital:<span> {item.capital}</span>
//                 </p>
//               </div>
//               <div className={s.detail_right}>
//                 {/* <p>
//                   Top Level Domain: <span>{item.topLevelDomain[0]}</span>
//                 </p> */}
//                 {/* <p>
//                   Currencies: <span>{item?.currencies[0].code}</span>
//                 </p> */}
//                 {/* <p>
//                   Language: <span>{item?.languages[0].name}</span>
//                 </p> */}
//               </div>
//             </div>
//             <div className={s.bottom}>
//               <p>Border:</p>
//               <div className={s.bottom_val}>
//                 {/* {item?.borders.map((e, i) => (
//                   <p
//                     className={s.border}
//                     key={i}
//                     style={{ backgroundColor: color.el }}
//                   >
//                     {e}
//                   </p>
//                 ))} */}
//               </div>
//             </div>
//             <div></div>
//           </div>
//         </div>
//       </div>
