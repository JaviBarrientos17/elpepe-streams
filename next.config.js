const sagasData = require("./data/Sagas.json");

module.exports = {
  basePath: "",

  async rewrites() {
    return [
      {
        source: "/:locale/sagas/:id",
        destination: "/sagas/[id]",
      },
    ];
  },

  async exportPathMap() {
    const paths = {
      "/sagas": { page: "/sagas" },
    };

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
