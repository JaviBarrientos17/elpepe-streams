const axios = require("axios");
const cheerio = require("cheerio");

const sheetUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSN5LRw_ERF8JF6HWG9GOkZCLOVwlCY00OcBIAd3ixBE3oDkV9h6bQ5s2K4YyCXKga15o_mim3d-1D2/pubhtml?gid=21074095&single=true";

export async function fetchData() {
  try {
    const response = await axios.get(sheetUrl);
    const $ = cheerio.load(response.data);
    const rows = $("table tbody tr");
    const data = [];

    rows.each((index, element) => {
      const columns = $(element).find("td");
      const rowData = [];

      columns.each((index, element) => {
        rowData.push($(element).text());
      });

      data.push(rowData);
    });

    return data;
  } catch (error) {
    console.error(error);
  }
}

fetchData().then((data) => {
  console.log(data);
});
