import { useState } from "react";
import { useRouter } from "next/router";
import SagaData from "../data/Sagas.json";

export default function SagaDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [season, setSeason] = useState("");
  const [showDefaultOption, setShowDefaultOption] = useState(true);

  const handleSelectChange = (event) => {
    setSeason(event.target.value);
    setShowDefaultOption(false);
  };

  const saga = SagaData.find((saga) => saga.id === parseInt(id));

  return saga ? (
    <div className="container mx-auto">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 content">
        <h1 className="title text-2xl sm:text-4xl font-bold my-4">
          {saga.title}
        </h1>
        <div className="max-w-2xl mx-auto">
          <img
            alt={saga.title}
            src={saga.img}
            className="w-full object-contain"
          />
        </div>
        <div className="p-4">
          <p className="text-white text-justify">{saga.synopsis}</p>
          <p className="text-white text-center sm:text-justify mt-8 mb-8">
            {saga.details}
          </p>
          {saga.downloadUrls ? (
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center sm:justify-start">
              <label htmlFor="season" className="mr-2 text-white">
                Películas:
              </label>
              <select
                name="season"
                id="season"
                value={season}
                onChange={handleSelectChange}
                className="bg-white text-black w-32"
                style={{
                  display: "inline-block",
                  border: "1px solid #ccc",
                  borderRadius: "0.375rem",
                  padding: "0.5rem",
                  minWidth: "120px",
                }}
              >
                {showDefaultOption && (
                  <option value="" disabled className="text-white">
                    Selecciona
                  </option>
                )}
                {Object.keys(saga.downloadUrls).map((key) => (
                  <option key={key} value={key} className="text-white">
                    {key}
                  </option>
                ))}
              </select>
              {season ? (
                <a
                  href={saga.downloadUrls[season]}
                  className="ml-2"
                  target="_blank"
                  rel="noopener noreferrer"
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
