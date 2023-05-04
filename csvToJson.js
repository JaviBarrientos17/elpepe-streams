// TODO - Comentar una u otra dependiendo el csv que se quiera utilizar
// const csvFilePath = "C:/Users/javie/Downloads/peliculas_subidas.csv";
const csvFilePath = "C:/Users/javie/Downloads/series_subidas.csv";
const papaparse = require("papaparse");
const fs = require("fs");

// Lista con los nombres de las columnas que se desean convertir en el archivo JSON
const columnas = ["Content", "link"];

fs.readFile(csvFilePath, "utf-8", (err, data) => {
  if (err) throw err;

  // Se utiliza la librería "papaparse" para leer el archivo CSV
  const jsonObj = papaparse.parse(data, { header: true }).data;

  // Se crea un nuevo objeto JSON que contiene las columnas especificadas
  const jsonData = jsonObj.map((obj) => {
    const data = {};
    columnas.forEach((col) => {
      if (col === "downloadUrls") {
        const urls = obj.Content
          ? obj.Content.match(/(http|https):\/\/[^\s]+/g)
          : [];
        data[col] = urls;
      } else {
        if (col in obj) {
          data[col] = obj[col].replace(/"/g, '\\"');
        }
      }
    });
    return data;
  });

  // Se guarda el objeto JSON generado en un archivo
  fs.writeFile(
    "C:/Users/javie/Downloads/archivo.json",
    JSON.stringify(jsonData),
    (err) => {
      if (err) throw err;
      console.log("Archivo JSON guardado exitosamente!");
    }
  );
});
