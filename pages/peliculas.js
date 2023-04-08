import { useState } from "react";
import Head from "next/head";

export default function Peliculas() {
  const [peliculas, setPeliculas] = useState([
    {
      id: 1,
      title: "Top Gun Maverick",
      videoUrl: "https://bit.ly/3zIQmcq",
      poster: "https://bit.ly/3mcCt36",
    },
    {
      id: 2,
      title: "Interestellar",
      videoUrl: "https://bit.ly/3KGurce",
      poster: "https://bit.ly/3GqlYax",
    },
  ]);

  return (
    <>
      <Head>
        <title>ElPepe Streams | Peliculas</title>
      </Head>
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold mb-8">Peliculas</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {peliculas.map((pelicula) => (
            <div key={pelicula.id} className="p-4 shadow rounded-lg">
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

            // TODO DESHABILITAR DESCARGA DEL VIDEO, LO DEL CLIC DERECHO Y LO DEL M3U8
          ))}
        </div>
      </div>
    </>
  );
}
