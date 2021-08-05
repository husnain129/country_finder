import UseApi from "./UseApi";

const UseCountry = () => {
  const api = UseApi();
  return {
    byRegion: async (region) => {
      try {
        let r = region === undefined ? "Africa" : region;
        const data = await api.get(`/region/${r}`);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    byName: async (name) => {
      try {
        const data = await api.get(`/name/${name}`);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  };
};

export default UseCountry;
