import { useState, useEffect } from "react";
import Head from "next/head";
import { fetchData } from "../data";

export default function Peliculas() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await fetchData();
      setPeliculas(data);
    }

    loadData();
  }, []);

  return (
    <>
      <Head>
        <title>El Pepe Streams | Películas</title>
      </Head>
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold mb-8">Películas</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {peliculas &&
            peliculas.map((pelicula, index) => (
              <div key={index} className="p-4 shadow rounded-lg">
                <h2 className="title text-lg font-bold">{pelicula.title}</h2>
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
                <p className="description">{pelicula.description}</p>
              </div>
            ))}
        </div>
        <a
          className="bg-indigo-500 text-white font-bold py-4 rounded-md flex items-center justify-center space-x-2"
          href="/sagas"
        />
      </div>
    </>
  );
}
