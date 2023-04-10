import React from "react";
import Head from "next/head";

export default function RepeticionesComponent() {
  return (
    <>
      <Head>
        <title>El Pepe Streams | Repeticiones</title>
      </Head>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="max-w-md w-full mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Repeticiones</h1>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {/* // TODO - MEJORAR IMGS DE LOS BTNS */}
            <a
              className="bg-indigo-500 text-white font-bold py-4 rounded-md flex items-center justify-center space-x-2"
              href="/f1"
            >
              <button className="bg-indigo-500 text-white font-bold py-4 rounded-md flex items-center justify-center space-x-2">
                <img
                  src="https://i.imgur.com/WH3itbC.jpg"
                  width={100}
                  height={100}
                  alt="F1 Logo"
                />
              </button>
            </a>
            <a
              className="bg-indigo-500 text-white font-bold py-4 rounded-md flex items-center justify-center space-x-2"
              href="/f2"
            >
              <button>
                <img
                  src="https://i.imgur.com/aHu0KdQ.png"
                  width={100}
                  height={100}
                  alt="F2 Logo"
                />
              </button>
            </a>
            <a
              className="bg-indigo-500 text-white font-bold py-4 rounded-md flex items-center justify-center space-x-2"
              href="/f3"
            >
              <button>
                <img
                  src="https://i.imgur.com/hJR4huf.png"
                  width={100}
                  height={100}
                  alt="F3 Logo"
                />
              </button>
            </a>
            <a
              className="bg-indigo-500 text-white font-bold py-4 rounded-md flex items-center justify-center space-x-2"
              href="/historicas"
            >
              <button>
                <img
                  src="https://i.imgur.com/eIBqism.png"
                  width={100}
                  height={100}
                  alt="Carreras historicas"
                />
              </button>
            </a>
            <a
              className="bg-indigo-500 text-white font-bold py-4 rounded-md flex items-center justify-center space-x-2"
              href="/historicas"
            >
              {/* <button>
                <img
                  src="https://i.imgur.com/eIBqism.png"
                  width={100}
                  height={100}
                  alt="Motor (varios)"
                />
              </button> */}
              Motor (varios)
            </a>
            <a
              className="bg-indigo-500 text-white font-bold py-4 rounded-md flex items-center justify-center space-x-2"
              href="/futbol"
            >
              <button>
                {/* <img
                  src="https://i.imgur.com/eIBqism.png"
                  width={100}
                  height={100}
                  alt="Futbol"
                /> */}
                Futbol
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
