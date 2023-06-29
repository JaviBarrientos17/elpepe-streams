import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import FooterComponent from "../components/FooterComponent";
import f2Data from "../data/F2.json";
import LoadingAnimationComponent from "../components/LoadingAnimationComponent";

export default function F2() {
  const [f2, setF2] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setF2(f2Data);
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
        <title>El Pepe Streams | F2</title>
      </Head>
      <div className={`container`}>
        <div className={`max-w-screen-xl px-4 sm:px-6 lg:px-8 content`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {f2 &&
              f2.map((f2Mapped, index) => (
                <div key={index} className="p-4 shadow rounded-lg">
                  <h2 className="title text-lg font-bold my-4">
                    {f2Mapped.title}
                  </h2>
                  <Image
                    alt={f2Mapped.title}
                    src={
                      window.innerWidth >= 768 ? f2Mapped.img : f2Mapped.imgWebp
                    }
                    fallback={
                      window.innerWidth >= 768
                        ? f2Mapped.imgAvif
                        : f2Mapped.imgWebp
                    }
                    width={800}
                    height={600}
                    className="object-contain"
                  />
                  <p className="description mt-2 mb-2 text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-10 whitespace-normal">
                    {f2Mapped.description}
                  </p>
                  <div className="flex justify-center items-center sm:flex-col sm:items-center my-4">
                    <a
                      href={f2Mapped.downloadUrl}
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
      </div>
      <FooterComponent />
    </>
  );
}
