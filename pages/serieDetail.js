import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SeriesData from "../data/Series.json";
import LoadingAnimationComponent from "../components/LoadingAnimationComponent";

export default function SerieDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [season, setSeason] = useState("");
  const [showDefaultOption, setShowDefaultOption] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const handleSelectChange = (event) => {
    setSeason(event.target.value);
    setShowDefaultOption(false);
  };

  const serie = SeriesData.find((serie) => serie.id === parseInt(id));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return isLoading ? (
    <div className="flex justify-center items-center h-screen">
      <LoadingAnimationComponent />
    </div>
  ) : (
    <div className="container mx-auto">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 content">
        <h1 className="title text-2xl sm:text-4xl font-bold my-4">
          {serie.title}
        </h1>
        <img
          alt={serie.title}

          // TODO - HACER LO MISMO EN PELÍCULAS

          src={window.innerWidth >= 768 ? serie.horizontalImg : serie.img}
          className="w-full object-contain"
        />
        <div className="p-4">
          <p className="text-white text-justify">{serie.synopsis}</p>
          <p className="text-white text-center sm:text-justify mt-8 mb-8">
            {serie.details}
          </p>
          {serie.downloadUrls ? (
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center sm:justify-start">
              <label htmlFor="season" className="mr-2 text-white">
                Temporadas:
              </label>
              <select
                name="season"
                id="season"
                value={season}
                onChange={handleSelectChange}
                className="bg-white text-black w-full sm:w-auto"
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "0.375rem",
                  padding: "0.5rem",
                }}
              >
                {showDefaultOption && (
                  <option value="" disabled className="text-black">
                    Selecciona
                  </option>
                )}
                {Object.keys(serie.downloadUrls).map((key) => (
                  <option key={key} value={key} className="text-black">
                    {key}
                  </option>
                ))}
              </select>
              {season ? (
                <a
                  href={serie.downloadUrls[season]}
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
  );
}
