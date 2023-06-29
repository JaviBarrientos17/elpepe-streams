import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import "../styles/navbar.css";
import "../styles/videos.css";
import "../styles/sagas.css";
import "../styles/repeticiones.css";
import "../styles/formulaStyles.css";
import "../styles/loadingAnimationStyles.css";

const Navbar = dynamic(() => import("../components/NavbarComponent"));
const HomeComponent = dynamic(() => import("../components/HomeComponent"));

function MyApp({ Component, pageProps }) {
  // Disable hydration on the first render
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  return (
    <>
      <Head>
        <title>El Pepe Streams</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.css"
          rel="stylesheet"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.js"></script>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      {/* <HomeComponent /> */}
    </>
  );
}

export default MyApp;
