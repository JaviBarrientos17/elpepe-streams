import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import FooterComponent from "../components/FooterComponent";
import sagasData from "../data/Sagas.json";

export default function Sagas() {
  const [sagas, setSagas] = useState([]);

  useEffect(() => {
    setSagas(sagasData);
  }, []);

  return (
    <>
      <div className={`container`}>
        <div className={`max-w-screen-xl px-4 sm:px-6 lg:px-8 content`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {sagas &&
              sagas.map((saga, index) => (
                <div key={index} className="p-4 shadow rounded-lg">
                  <h2 className="title text-lg font-bold my-4">{saga.title}</h2>
                  <Image
                    alt={saga.title}
                    src={window.innerWidth >= 768 ? saga.img : saga.imgWebp}
                    fallback={
                      window.innerWidth >= 768 ? saga.imgAvif : saga.imgWebp
                    }
                    width={800}
                    height={600}
                    className="object-contain"
                  />
                  <p className="description mt-2 mb-2 text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-10 whitespace-normal">
                    {saga.description}
                  </p>
                  <div
                    className="flex justify-center items-center sm:flex-col sm:items-center my-4"
                    onLoad={console.log(saga.id)}
                  >
                    <Link
                      href="/sagas/[id]"
                      as={`/sagas/${saga.id}`}
                      passHref
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"
                    >
                      Ver más
                    </Link>
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
