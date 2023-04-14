import React, { Fragment } from "react";
import Head from "next/head";
import FooterComponent from "../components/FooterComponent";

export default function HomeComponent() {
  return (
    <Fragment>
      <Head>
        <title>El Pepe Streams</title>
      </Head>

      <div className="flex min-h-screen w-full justify-center items-center md:mt-10">
        <img
          src="https://drive.google.com/uc?export=view&id=146ksotIL9W2u_MmIfS_fyF8LvVgYTXuU"
          alt="Homepage img"
          className="w-4/5 h-4/5 object-contain object-center"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-white text-center sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-8 sm:mt-16">
          ElPepe Streams
        </h1>
        <p className="mt-8 text-lg text-white text-center sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          Bienvenidos a ElPepe Streams, tu fuente de entretenimiento en línea.
          Aquí encontrarás una amplia selección de películas y series para ver
          en cualquier momento.
        </p>
      </div>

      <FooterComponent />
    </Fragment>
  );
}
