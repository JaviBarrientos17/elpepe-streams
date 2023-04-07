import { useState } from "react";
import Head from "next/head";

export default function Peliculas() {
  const [peliculas, setPeliculas] = useState([
    {
      id: 1,
      title: "Top Gun Maverick",
      videoUrl:
        "https://dl.dropboxusercontent.com/s/as9rr67qiesznvc/Top.Gun.Maverick.2022.IMAX.2160p.BluRay.HEVC.TrueHD.7.1.Atmos%20%5BES%20-%20EN%5D-%20ElPepe%20Remix.mkv?raw=1",
      poster: "https://bit.ly/3mcCt36",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    },
    {
      id: 2,
      title: "GP Australia 2006",
      videoUrl:
        "https://www.dropbox.com/s/k90qh1q2xbycao7/03%20-%20Gran%20Premio%20de%20Australia%202006%20%28Albert%20Park%29%20%5B1080p%5D%20-%20ElPepe%20Remix_edit.mkv?raw=1",
      description:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    },
    {
      id: 3,
      title: "GP Australia 2007",
      videoUrl:
        "",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    },
  ]);

  return (
    <>
      <Head>
        <title>ElPepe Streams | Peliculas</title>
      </Head>
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold mb-8">Peliculas</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {peliculas.map((pelicula) => (
            <div key={pelicula.id} className="p-4 shadow rounded-lg">
              <h2 className="text-lg font-bold">{pelicula.title}</h2>
              <div className="aspect-w-16 aspect-h-9">
                <video
                  width="320"
                  height="240"
                  className="w-full h-full rounded-lg"
                  poster={pelicula.poster}
                  controls
                >
                  <source src={pelicula.videoUrl} type="video/mp4" />
                </video>
              </div>
              <p className="text-gray-600">{pelicula.description}</p>
            </div>

            // TODO DESHABILITAR DESCARGA DEL VIDEO, LO DEL CLIC DERECHO Y LO DEL M3U8

          ))}
        </div>
      </div>
    </>
  );
}
