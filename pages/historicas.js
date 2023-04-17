import { useState, useEffect } from "react";
import Head from "next/head";
const historicasData = require("../data/Históricas.json");

export default function Históricas() {
  const [historicas, setHistoricas] = useState([]);

  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    setHistoricas(historicasData);
  }, []);

  return (
    <>
      <Head>
        <title>El Pepe Streams | Históricas</title>
      </Head>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white text-center sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-8 sm:mt-16">
          Históricas
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {historicas &&
            historicas.map((historica, index) => (
              <div key={index} className="p-4 shadow rounded-lg">
                <h2 className="title text-lg font-bold my-4">
                  {historica.title}
                </h2>
                <div className="aspect-w-16 aspect-h-9">
                  <video
                    width="320"
                    height="240"
                    className="w-full h-full rounded-lg object-cover object-center"
                    poster={historica.poster}
                    controls
                    onContextMenu={handleContextMenu}
                    controlsList="nodownload"
                  >
                    <source src={historica.videoUrl} type="video/mp4" />
                  </video>
                </div>
                <p className="description my-1 break-words overflow-hidden text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-10 line-clamp-2 sm:line-clamp-3 md:line-clamp-4">
                  {historica.description}
                </p>
                <div className="flex justify-center items-center sm:flex-col sm:items-center my-4">
                  <a
                    href={historica.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md inline-flex items-center">
                      Descargar
                    </button>
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
