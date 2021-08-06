import Header from "components/header/Header";
import Layout from "components/layout/Layout";
import Navbar from "components/navbar/Navbar";
// import Pagination from "components/pagination/Pagination";
import { CountryContext } from "context/CountryContext";
import useCountry from "hooks/useCountry";
import React, { useContext, useEffect, useState } from "react";

export default function Home() {
  const { setCountry, color } = useContext(CountryContext);
  const [select, setSelect] = useState();
  const [name, setName] = useState(undefined);
  let api = useCountry();
  useEffect(() => {
    if (name === "" || name === undefined) {
      (async () => {
        await api.byRegion(select).then((res) => setCountry(res));
      })();
    }
  }, [select, name]);
  useEffect(() => {
    if (name !== undefined && name) {
      (async () => {
        await api.byName(name).then((res) => setCountry(res));
      })();
    }
  }, [name]);
  return (
    <div style={{ backgroundColor: color.bg, paddingBottom: "2%" }}>
      <Navbar />
      <Header
        select={select}
        setSelect={setSelect}
        setName={setName}
        name={name}
      />
      <Layout />
      {/* <Pagination /> */}
    </div>
  );
}
