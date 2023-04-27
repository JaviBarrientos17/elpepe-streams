import { useState } from "react";

export default function SagaDetail({ saga }) {
  const [season, setSeason] = useState("");
  const [showDefaultOption, setShowDefaultOption] = useState(true);

  const handleSelectChange = (event) => {
    setSeason(event.target.value);
    setShowDefaultOption(false);
  };

  return (
    <div className="container">
      <div className="max-w-screen-xl px-4 sm:px-6 lg:px-8 content">
        <h1 className="title text-2xl sm:text-4xl font-bold my-4">
          {saga.title}
        </h1>
        <img
          alt={saga.title}
          src={saga.img}
          width={800}
          height={600}
          className="object-contain"
        />
        <div className="p-4">
          <p className="text-gray-700">{saga.synopsis}</p>
          <p className="text-gray-700">{saga.details}</p>
          {saga.downloadUrls ? (
            <div className="mt-4">
              <label htmlFor="season" className="mr-2">
                Temporada:
              </label>
              <select
                name="season"
                id="season"
                value={season}
                onChange={handleSelectChange}
                className="border border-gray-400 rounded-md p-1"
              >
                {showDefaultOption && (
                  <option value="" disabled>
                    Selecciona temporada
                  </option>
                )}
                {Object.keys(saga.downloadUrls).map((key) => (
                  <option key={key} value={key}>
                    {`T${key.slice(-1)}`}
                  </option>
                ))}
              </select>
              {season ? (
                <a href={saga.downloadUrls[season]}>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md inline-flex items-center ml-2">
                    Descargar {season}
                  </button>
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

// TODO MOVER JUEGOS DEL HAMBRE A SERIES REUTILIZANDO EL CÓDIGO DE SAGAS.JS Y DE SAGADETAIL.JS