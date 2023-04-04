import React from "react";
import App from "next/app";
import Head from "next/head";
import NavbarComponent from "../components/NavbarComponent";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>ElPepe Streams</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.css" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
        <NavbarComponent />
      </>
    );
  }
}

export default MyApp;
