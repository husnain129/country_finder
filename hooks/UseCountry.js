import useApi from "./UseApi";

const UseCountry = () => {
  const api = useApi();
  return {
    byRegion: async (region) => {
      try {
        let r = region === undefined ? "Africa" : region;
        const data = await api.get(`/region/${r}`);
        let responseData = data.map((e) => {
          return {
            flag: e.flags["png"],
            name: e.name,
            population: e.population,
            region: e.region,
            capital: e.capital[0],
          };
        });
        return responseData;
      } catch (error) {
        console.log(error);
      }
    },
    byName: async (name) => {
      try {
        const data = await api.get(`/name/${name}`);

        return {
          flag: data[0].flags["png"],
          name: data[0].name,
          population: data[0].population,
          region: data[0].region,
          capital: data[0].capital[0],
          languages: Object.values(data[0]["languages"]).map((e) => {
            return e;
          }),
        };
      } catch (error) {
        console.log(error);
      }
    },
  };
};

export default UseCountry;
