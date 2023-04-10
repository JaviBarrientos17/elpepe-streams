import React from "react";
import Head from "next/head";

export default function Sagas() {
  return (
    <>
      <Head>
        <title>El Pepe Streams | Sagas</title>
      </Head>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="max-w-md w-full mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Sagas</h1>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {/* // TODO - MEJORAR IMGS DE LOS BTNS */}
            <a
              className="bg-indigo-500 text-white font-bold py-4 rounded-md flex items-center justify-center space-x-2"
              href="/regresoAlFuturo"
            >
              <button className="flex items-center justify-center bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
                <img
                  src="https://bit.ly/3A5cKgt"
                  alt="Regreso al futuro"
                  className="h-auto w-full"
                />
              </button>
            </a>
            {/* <a
              className="bg-indigo-500 text-white font-bold py-4 rounded-md flex items-center justify-center space-x-2"
              href="/f2"
            >
              <button class="flex items-center justify-center bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
                <img src="" alt="F2 Logo" class="h-auto w-full" />
              </button>
            </a>
            <a
              className="bg-indigo-500 text-white font-bold py-4 rounded-md flex items-center justify-center space-x-2"
              href="/f3"
            >
              <button class="flex items-center justify-center bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
                <img src="" alt="F3 Logo" class="h-auto w-full" />
              </button>
            </a>
            <a
              className="bg-indigo-500 text-white font-bold py-4 rounded-md flex items-center justify-center space-x-2"
              href="/historicas"
            >
              <button class="flex items-center justify-center bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
                <img src="" alt="Carreras historicas" class="h-auto w-full" />
              </button>
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
}
