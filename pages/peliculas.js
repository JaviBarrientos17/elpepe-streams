import { useState, useEffect } from "react";
import FooterComponent from "../components/FooterComponent";
import Link from "next/link";
import Head from "next/head";
import peliculasData from "../data/Películas.json";
import LoadingAnimationComponent from "../components/LoadingAnimationComponent";

export default function Peliculas() {
  const [peliculas, setPeliculas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPeliculas(peliculasData);
      setIsLoading(false);
    }, 2000);
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
          {isLoading ? (
            <div className="flex justify-center items-center h-screen">
              <LoadingAnimationComponent />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {peliculas.map((content) => (
                <div key={content.id} className="grid-item">
                  <Link
                    href={`/peliculas/${content.id}`}
                    passHref
                    legacyBehavior
                  >
                    <a>
                      <img
                        alt={content.title}
                        src={content.img}
                        className="w-full h-auto md:w-auto md:h-auto lg:w-auto lg:h-auto sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]"
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
          )}
        </div>
      </div>
      <FooterComponent />
    </>
  );
}
