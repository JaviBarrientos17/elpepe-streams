import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import historicasData from "../data/Históricas.json";
import FooterComponent from "../components/FooterComponent";
import LoadingAnimationComponent from "../components/LoadingAnimationComponent";

export default function Historicas() {
  const [historicas, setHistoricas] = useState(historicasData);
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
        <title>El Pepe Streams | Históricas</title>
      </Head>
      <div className="container">
        <div className="max-w-screen-xl px-4 sm:px-6 lg:px-8 content">
          <h1 className="title text-2xl sm:text-4xl font-bold my-4 text-white text-center">
            Históricas
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {historicas.map((race) => (
              <div key={race.id} className="grid-item">
                <Link href={`/historicas/${race.id}`} passHref legacyBehavior>
                  <a>
                    <Image
                      alt={race.title}
                      src={race.img}
                      width={800}
                      height={600}
                      className="object-contain"
                    />
                  </a>
                </Link>
                <div className="p-4 text-white text-justify">
                  <h2 className="text-xl font-bold text-center">
                    {race.title}
                  </h2>
                  <p>{race.description}</p>
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
