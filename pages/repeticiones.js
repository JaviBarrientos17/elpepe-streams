import { useState } from "react";
import Head from "next/head";

export default function RepeticionesComponent() {
  const [repeticiones, setRepeticiones] = useState([
    {
      id: 1,
      title: "GP Australia 2006",
      videoUrl: "https://bit.ly/3zDefSP",
      poster: "https://bit.ly/40QCusD",
      description:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    },
    {
      id: 2,
      title: "GP Australia 2007",
      videoUrl: "https://bit.ly/43gDuYE",
      poster: "https://bit.ly/41dZpOl",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    },
  ]);

  return (
    <>
      <Head>
        <title>ElPepe Streams | Repeticiones</title>
      </Head>
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold mb-8">Repeticiones</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {repeticiones.map((repeticion) => (
            <div key={repeticion.id} className="p-4 shadow rounded-lg">
              <h2 className="title text-lg font-bold">{repeticion.title}</h2>
              <div className="aspect-w-16 aspect-h-9">
                <video
                  width="320"
                  height="240"
                  className="w-full h-full rounded-lg"
                  poster={repeticion.poster}
                  controls
                >
                  <source src={repeticion.videoUrl} type="video/mp4" />
                </video>
              </div>
              <p className="description">{repeticion.description}</p>
            </div>

            // TODO DESHABILITAR DESCARGA DEL VIDEO, LO DEL CLIC DERECHO Y LO DEL M3U8
          ))}
        </div>
      </div>
    </>
  );
}
