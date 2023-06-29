import { useState, useEffect } from "react";
import Head from "next/head";
import FooterComponent from "../components/FooterComponent";
import MyVideoPlayer from "./videoPlayer";
import LoadingAnimationComponent from "../components/LoadingAnimationComponent";

export default function Directos() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return isLoading ? (
    <div className="flex justify-center items-center h-screen">
      <LoadingAnimationComponent />
    </div>
  ) : (
    <>
      <Head>
        <title>El Pepe Streams | Directos</title>
      </Head>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="title text-2xl sm:text-4xl font-bold my-4 text-white text-center">
          Directos
        </h1>
        <div className="w-full h-full flex items-center justify-center mb-1">
          <div data-vjs-player className="w-full h-full">
            <MyVideoPlayer />
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}
