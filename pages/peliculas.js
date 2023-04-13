import { useState, useEffect } from "react";
import Head from "next/head";
const peliculasData = require("../data/Películas.json");

export default function Peliculas() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    setPeliculas(peliculasData);
  }, []);

  return (
    <>
      <Head>
        <title>El Pepe Streams | Películas</title>
      </Head>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white text-center sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-8 sm:mt-16">
          Películas
        </h1>
        <div className="flex justify-center items-center sm:flex-col sm:items-center my-4">
          <a
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md inline-flex items-center mr-4"
            href="/sagas"
          >
            Ver sagas
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {peliculas &&
            peliculas.map((pelicula, index) => (
              <div key={index} className="p-4 shadow rounded-lg">
                <h2 className="title text-lg font-bold my-4">
                  {pelicula.title}
                </h2>
                <div className="aspect-w-16 aspect-h-9">
                  <video
                    width="320"
                    height="240"
                    className="w-full h-full rounded-lg"
                    poster={pelicula.poster}
                    controls
                  >
                    <source src={pelicula.videoUrl} type="video/mp4" />
                  </video>
                </div>
                <p className="description my-1">{pelicula.description}</p>
                <div className="flex justify-center items-center sm:flex-col sm:items-center my-4">
                  <a
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md inline-flex items-center"
                    download={""}
                  >
                    Descargar
                  </a>

                  {/* // TODO AÑADIR LINKS DE DESCARGA AL JSON */}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

// TODO IMPLEMENTAR ESTE CÓDIGO EN REPETICIONES, HISTORICAS Y EN SAGAS
