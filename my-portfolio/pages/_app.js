import "../styles/globals.css";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Reservation management system" />
        <link rel="icon" type="image/x-icon" href="/images/favi.png"/>
        <title>pratik_thakkar_resume</title>


      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;