import { CountryProvider } from "context/CountryContext";
import { QueryClient } from "react-query";
import "../styles/globals.css";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }) {
  return (
    <queryClient>
      <CountryProvider>
        <Component {...pageProps} />
      </CountryProvider>
    </queryClient>
  );
}

export default MyApp;
