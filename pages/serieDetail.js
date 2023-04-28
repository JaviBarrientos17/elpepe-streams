import { useState } from "react";
import { useRouter } from "next/router";
import SeriesData from "../data/Series.json";

export default function SerieDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [season, setSeason] = useState("");
  const [showDefaultOption, setShowDefaultOption] = useState(true);

  const handleSelectChange = (event) => {
    setSeason(event.target.value);
    setShowDefaultOption(false);
  };

  const serie = SeriesData.find((serie) => serie.id === parseInt(id));

  return serie ? (
    <div className="container mx-auto">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 content">
        <h1 className="title text-2xl sm:text-4xl font-bold my-4">
          {serie.title}
        </h1>
        <img
          alt={serie.title}
          src={serie.img}
          className="w-full object-contain"
        />
        <div className="p-4">
          <p className="text-gray-700">{serie.synopsis}</p>
          <p className="text-gray-700">{serie.details}</p>
          {serie.downloadUrls ? (
            <div className="mt-4 flex items-center">
              <label htmlFor="season" className="mr-2">
                Temporada:
              </label>
              <select
                name="season"
                id="season"
                value={season}
                onChange={handleSelectChange}
                className="border border-gray-400 rounded-md p-1 mx-2"
              >
                {showDefaultOption && (
                  <option value="" disabled className="text-black">
                    Selecciona temporada
                  </option>
                )}
                {Object.keys(serie.downloadUrls).map((key) => (
                  <option key={key} value={key} className="text-black">
                    {`Temporada ${key}`}
                  </option>
                ))}
              </select>
              {season ? (
                <a href={serie.downloadUrls[season]} className="ml-2">
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
