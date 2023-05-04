import { useState } from "react";
import { useRouter } from "next/router";
import PeliData from "../data/Películas.json";

export default function PeliDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [season, setSeason] = useState("");
  const [showDefaultOption, setShowDefaultOption] = useState(true);

  const handleSelectChange = (event) => {
    setSeason(event.target.value);
    setShowDefaultOption(false);
  };

  const peli = PeliData.find((peli) => peli.id === parseInt(id));

  return peli ? (
    <div className="container mx-auto">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 content">
        <h1 className="title text-2xl sm:text-4xl font-bold my-4">
          {peli.title}
        </h1>
        <img
          alt={peli.title}
          src={peli.img}
          className="w-full object-contain"
        />
        <div className="p-4">
          <p className="text-white text-justify">{peli.synopsis}</p>
          <p className="text-white text-center sm:text-justify mt-8 mb-8">
            {peli.details}
          </p>
          {peli.downloadUrls ? (
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center sm:justify-start">
              <label htmlFor="season" className="mr-2 text-white">
                Versiones:
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
                  <option value="" disabled className="text-white">
                    Selecciona
                  </option>
                )}
                {Object.keys(peli.downloadUrls).map((key) => (
                  <option key={key} value={key} className="text-white">
                    {key}
                  </option>
                ))}
              </select>
              {season ? (
                <a
                  href={peli.downloadUrls[season]}
                  className="ml-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md inline-flex items-center">
                    Descargar {season}
                  </button>
                </a>
              ) : null}
              {/* <div className="aspect-w-16 aspect-h-9">
                <video
                  width="320"
                  height="240"
                  className="w-full h-full rounded-lg"
                  poster={peli.img}
                  controls
                >
                  <source src={peli.videoUrl} type="video/mp4" />
                </video>
              </div> */}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  ) : null;
}
