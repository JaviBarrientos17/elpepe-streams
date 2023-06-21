import { useState, useEffect } from "react";
import FooterComponent from "../components/FooterComponent";
import Link from "next/link";
import Head from "next/head";
import peliculasData from "../data/Películas.json";

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
      <div className="container">
        <div className="max-w-screen-xl px-4 sm:px-6 lg:px-8 content">
          <h1 className="title text-2xl sm:text-4xl font-bold my-4 text-white text-center">
            Listado de películas
          </h1>
          <div className="flex justify-center items-center sm:flex-col sm:items-center my-4">
            <a href={"/sagas"} rel="noopener noreferrer">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md inline-flex items-center">
                Ver sagas
              </button>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {peliculas.map((content) => (
              <div key={content.id} className="grid-item">
                <Link href={`/peliculas/${content.id}`} passHref legacyBehavior>
                  <a>
                    <img
                      alt={content.title}
                      src={content.img}
                      style={{ width: "400px", height: "400px" }}
                      className="object-contain"
                    />
                  </a>
                </Link>
                <div className="p-4 text-white text-justify">
                  <h2 className="text-xl font-bold text-center">
                    {content.title}
                  </h2>
                  <p>{content.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}
