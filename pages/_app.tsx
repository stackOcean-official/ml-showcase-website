import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {process.env.NODE_ENV === "production" && (
          <script
            defer
            data-domain="ml.stackocean.com"
            src="https://plausible.stackocean.com/js/plausible.js"
          ></script>
        )}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
