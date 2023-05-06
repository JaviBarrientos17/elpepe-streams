import React, { Fragment } from "react";
import Head from "next/head";
import FooterComponent from "../components/FooterComponent";
import MyVideoPlayer from "./videoPlayer";

export default function HomeComponent() {
  return (
    <Fragment>
      <Head>
        <title>El Pepe Streams</title>
      </Head>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <div className="flex min-h-screen w-full justify-center items-center">
          <img
            src="https://drive.google.com/uc?export=view&id=146ksotIL9W2u_MmIfS_fyF8LvVgYTXuU"
            alt="Homepage img"
            className="w-4/5 h-4/5 object-cover"
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-center mt-8 mb-4 text-lg text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Bienvenidos a ElPepe Streams, tu fuente de entretenimiento en línea.
          </p>
          <p className="text-center my-4 text-lg text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Aquí encontrarás una amplia selección de películas y series para ver
            en cualquier momento.
          </p>
        </div>
      </div>

      <p className="text-center my-4 text-lg text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        DIRECTOS (PROVISIONALMENTE)
      </p>
      <div className="w-full h-full flex items-center justify-center">
        {/* // TODO - MOVER LO DE LOS DIRECTOS A OTRA PARTE Y QUE TENGA UN LINK EN EL NAVBAR  */}
        <div data-vjs-player className="w-full h-full">
          <MyVideoPlayer />
        </div>
      </div>

      <FooterComponent />
    </Fragment>
  );
}
