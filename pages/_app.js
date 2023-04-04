import React from "react";
import Head from "next/head";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/NavbarComponent"));
const HomeComponent = dynamic(() => import("../components/HomeComponent"));

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ElPepe Streams</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.css"
          rel="stylesheet"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.js"></script>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <HomeComponent />
    </>
  );
}

export default MyApp;