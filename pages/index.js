import React, { Fragment } from "react";
import Head from "next/head";
import FooterComponent from "../components/FooterComponent";

export default function HomeComponent() {
  return (
    <Fragment>
      <Head>
        <title>El Pepe Streams</title>
      </Head>

      <img
        src="https://bit.ly/3zJ9veb"
        className="w-full object-cover"
        alt="background"
      />

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
