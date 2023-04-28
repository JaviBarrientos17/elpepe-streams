import { useState } from "react";
import { useRouter } from "next/router";
import SagasData from "../data/Sagas.json";

export default function SagaDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [season, setSeason] = useState("");
  const [showDefaultOption, setShowDefaultOption] = useState(true);

  const handleSelectChange = (event) => {
    setSeason(event.target.value);
    setShowDefaultOption(false);
  };

  const saga = SagasData.find((saga) => saga.id === parseInt(id));

  return saga ? (
    <div className="container">
      <div className="max-w-screen-xl px-4 sm:px-6 lg:px-8 content">
        <h1 className="title text-2xl sm:text-4xl font-bold my-4">
          {saga.title}
        </h1>
        <img
          alt={saga.title}
          src={saga.img}
          width={400}
          height={300}
          className="object-contain mx-auto"
        />
        <div className="p-4 text-white">
          <p className="text-white text-justify">{saga.synopsis}</p>
          <p className="text-white text-justify">{saga.details}</p>
          {saga.downloadUrls ? (
            <div className="mt-4 text-center">
              <label
                htmlFor="season"
                className="mr-2"
                style={{ marginRight: "10px" }}
              >
                Peliculas:
              </label>
              <select
                name="season"
                id="season"
                value={season}
                onChange={handleSelectChange}
                className="border border-gray-400 rounded-md p-1 mx-auto"
                style={{ marginRight: "10px" }}
              >
                {showDefaultOption && (
                  <option value="" disabled className="text-black">
                    Selecciona pelicula
                  </option>
                )}
                {Object.keys(saga.downloadUrls).map((key) => (
                  <option key={key} value={key} className="text-black">
                    {key}
                  </option>
                ))}
              </select>
              {season ? (
                <a
                  href={saga.downloadUrls[season]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="my-2"
                  style={{ marginRight: "5px" }}
                >
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md inline-flex items-center">
                    Descargar {season}
                  </button>
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  ) : null;
}
