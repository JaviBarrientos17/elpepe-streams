import { useState } from "react";
import { useRouter } from "next/router";
import HistoricasData from "../data/Históricas.json";

export default function HistoricaDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [season, setSeason] = useState("");
  const [showDefaultOption, setShowDefaultOption] = useState(true);

  const handleSelectChange = (event) => {
    setSeason(event.target.value);
    setShowDefaultOption(false);
  };

  const raceSeason = HistoricasData.find((season) => season.id === parseInt(id));

  return raceSeason ? (
    <div className="container mx-auto">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 content">
        <h1 className="title text-2xl sm:text-4xl font-bold my-4">
          {raceSeason.title}
        </h1>
        <div className="max-w-2xl mx-auto">
          <img
            alt={raceSeason.title}
            src={raceSeason.detailsImg}
            className="w-full object-contain"
          />
        </div>
        <div className="p-4">
          <p className="text-white text-justify">{raceSeason.synopsis}</p>
          <p className="text-white text-center sm:text-justify mt-8 mb-8">
            {raceSeason.details}
          </p>
          {raceSeason.downloadUrls ? (
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center sm:justify-start">
              <label htmlFor="season" className="mr-2 text-white">
                Carreras:
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
                  <option value="" disabled className="text-black">
                    Selecciona
                  </option>
                )}
                {Object.keys(raceSeason.downloadUrls).map((key) => (
                  <option key={key} value={key} className="text-black">
                    {key}
                  </option>
                ))}
              </select>
              {season ? (
                <a
                  href={raceSeason.downloadUrls[season]}
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
