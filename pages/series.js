import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import seriesData from "../data/Series.json";
import FooterComponent from "../components/FooterComponent";
import LoadingAnimationComponent from "../components/LoadingAnimationComponent";

export default function Series() {
  const [series, setSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSeries(seriesData);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Head>
        <title>El Pepe Streams | Series</title>
      </Head>
      <div className="container">
        <div className="max-w-screen-xl px-4 sm:px-6 lg:px-8 content">
          <h1 className="title text-2xl sm:text-4xl font-bold my-4 text-white text-center">
            Listado de series
          </h1>
          {isLoading ? (
            <div className="flex justify-center items-center h-screen">
              <LoadingAnimationComponent />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {series.map((serie) => (
                <div key={serie.id} className="grid-item">
                  <Link href={`/series/${serie.id}`} passHref legacyBehavior>
                    <a>
                      <Image
                        alt={serie.title}
                        src={serie.img}
                        width={800}
                        height={600}
                        className="object-contain"
                      />
                    </a>
                  </Link>
                  <div className="p-4 text-white text-justify">
                    <h2 className="text-xl font-bold text-center">
                      {serie.title}
                    </h2>
                    <p>{serie.description}</p>
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
