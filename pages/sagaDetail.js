import Image from "next/image";

export default function SagaDetail({ saga }) {
  return (
    <div className="container">
      <div className="max-w-screen-xl px-4 sm:px-6 lg:px-8 content">
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
        <div className="p-4">
          <p className="text-gray-700">{saga.description}</p>
        </div>
      </div>
    </div>
  );
}
