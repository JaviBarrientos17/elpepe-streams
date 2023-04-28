const sagasData = require("./data/Sagas.json");

module.exports = {
  async redirects() {
    return [
      {
        source: "/sagas",
        destination: "/sagas/",
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/:locale/sagas",
        destination: "/sagas",
      },
      {
        source: "/:locale/sagas/:id",
        destination: "/sagas/[id]",
      },
    ];
  },

  async defaultPathMap() {
    const paths = {
      "/sagas/": { page: "/sagas" },
    };

    for (const locale of ["en", "es"]) {
      paths[`/${locale}/sagas`] = {
        page: "/sagas",
        query: { __nextLocale: locale },
      };
      paths[`/${locale}/sagas/:id`] = {
        page: "/sagas/[id]",
        query: { __nextLocale: locale },
      };
    }

    for (const saga of sagasData) {
      paths[`/sagas/${saga.id}`] = {
        page: "/sagas/[id]",
        query: { id: saga.id },
      };
    }

    return paths;
  },

  images: {
    domains: ["bit.ly"],
  },
};

