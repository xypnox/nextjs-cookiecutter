import type { AppProps /*, AppContext */ } from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import "../global.css";
import { theme } from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
