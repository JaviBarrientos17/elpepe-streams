import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import sagasData from "../data/Sagas.json";
import FooterComponent from "../components/FooterComponent";

export default function Sagas() {
  const [sagas, setSagas] = useState(sagasData);

  return (
    <>
      <div className="container">
        <div className="max-w-screen-xl px-4 sm:px-6 lg:px-8 content">
          <h1 className="title text-2xl sm:text-4xl font-bold my-4 text-white text-center">
            Listado de sagas
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {sagas.map((saga) => (
              <div key={saga.id} className="grid-item">
                <Link href={`/sagas/${saga.id}`} passHref legacyBehavior>
                  <a>
                    <Image
                      alt={saga.title}
                      src={saga.img}
                      width={800}
                      height={600}
                      className="object-contain"
                    />
                  </a>
                </Link>
                <div className="p-4 text-white text-justify">
                  <h2 className="text-xl font-bold text-center">
                    {saga.title}
                  </h2>
                  <p>{saga.description}</p>
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
