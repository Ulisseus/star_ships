import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="title" content="Star Wars Ships" />
        <title key="title">Star Wars Ships</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
