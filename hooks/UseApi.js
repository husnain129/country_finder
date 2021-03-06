import axios from "axios";
const UseApi = () => {
  const url = "https://restcountries.com/v3.1";
  return {
    get: async (endpoint) => {
      try {
        const { data } = await axios.get(`${url}${endpoint}`);
        console.log("hello");
        // const { data } = await axios.get({
        //   baseUrl: `${url}${endpoint}`,
        //   headers: {
        //     "Access-Control-Allow-Origin": "*",
        //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        //   },
        // });
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  };
};

export default UseApi;
