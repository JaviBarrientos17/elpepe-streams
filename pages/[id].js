import { useRouter } from "next/router";
import Image from "next/image";
import sagasData from "../../data/Sagas.json";
import FooterComponent from "../../components/FooterComponent";

export default function Saga() {
  const router = useRouter();
  let saga = null;

  if (router && router.query && router.query.id) {
    const id = parseInt(router.query.id);
    saga = sagasData.find((saga) => saga.id === id);
    console.log(id);
  }

  return (
    <>
      {saga ? (
        <div className="container">
          <div className="max-w-screen-xl px-4 sm:px-6 lg:px-8 content">
            <div className="p-4 shadow rounded-lg">
              <h1 className="title text-2xl sm:text-4xl font-bold my-4">
                {saga.title}
              </h1>
              <Image
                alt={saga.title}
                src={saga.img}
                width={800}
                height={600}
                className="object-contain"
              />
              <p className="description mt-2 mb-2 text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-10 whitespace-normal">
                {saga.description}
              </p>
              <div className="flex justify-center items-center sm:flex-col sm:items-center my-4">
                <a
                  href={saga.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md inline-flex items-center">
                    Descargar
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="max-w-screen-xl px-4 sm:px-6 lg:px-8 content">
            <p>Cargando...</p>
          </div>
        </div>
      )}
      <FooterComponent />
    </>
  );
}
