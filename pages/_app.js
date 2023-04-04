import React from "react";
import App from "next/app";
import Head from "next/head";
import NavbarComponent from "../components/NavbarComponent";
import Script from "next/script";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>ElPepe Streams</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.css" rel="stylesheet" />
          <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.js" />
        </Head>
        <Component {...pageProps} />
        <NavbarComponent />
      </>
    );
  }
}

export default MyApp;
