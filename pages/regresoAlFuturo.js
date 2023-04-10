import { useState } from "react";
import Head from "next/head";

export default function RepeticionesComponent() {
  const [repeticiones, setRepeticiones] = useState([
    {
      id: 1,
      title: "Regreso al Futuro",
      videoUrl: "https://bit.ly/40U3qYd",
      poster: "https://bit.ly/3GvopbM",
    },
    {
      id: 2,
      title: "Regreso al Futuro II",
      videoUrl: "https://bit.ly/3UEoqAh",
      poster: "https://bit.ly/3nZkNbF",
    },
    {
      id: 3,
      title: "Regreso al Futuro III",
      videoUrl: "",
      poster: "",
    },
  ]);

  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Head>
        <title>El Pepe Streams | Sagas</title>
      </Head>
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold mb-8">Regreso al Futuro</h1>
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
                  onContextMenu={handleContextMenu}
                  controlsList="nodownload"
                >
                  <source src={repeticion.videoUrl} type="video/mp4" />
                </video>
              </div>
              <p className="description">{repeticion.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
