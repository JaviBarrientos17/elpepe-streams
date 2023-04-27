const sagasData = require("./data/Sagas.json");

module.exports = {
  async defaultPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    const paths = {
      // Manejar la página de sagas sin parámetros de consulta
      "/sagas/": { page: "/sagas" },

      // Manejar las páginas de sagas con el parámetro de consulta __nextLocale
      "/sagas?__nextLocale=en": {
        page: "/sagas",
        query: { __nextLocale: "en" },
      },
      "/sagas?__nextLocale=es": {
        page: "/sagas",
        query: { __nextLocale: "es" },
      },

      // Manejar las páginas de sagas con el parámetro de consulta __nextDefaultLocale
      "/sagas?__nextLocale=en": {
        page: "/sagas",
        query: { __nextLocale: "en" },
      },
      "/sagas?__nextLocale=es": {
        page: "/sagas",
        query: { __nextLocale: "es" },
      },

      // Manejar las páginas de sagas con un parámetro de ruta
      ...sagasData.reduce((acc, saga) => {
        acc[`/sagas/${saga.id}`] = {
          page: "/sagas/[id]",
          query: { id: saga.id },
        };
        return acc;
      }, {}),
    };

    return paths;
  },

  images: {
    domains: ["bit.ly"],
  },
};
