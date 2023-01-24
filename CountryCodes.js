async function getCountryName(code) {
  let axios = require("axios");

  async function getData(pageNr) {
    const url = `https://jsonmock.hackerrank.com/api/countries?page=${pageNr}`;

    const response = await axios.get(url);
    const data = response.data;

    const currentPage = Number(data.page);
    const totalPages = Number(data.total_pages);

    let countryName = null;

    data.data.forEach(country => {
      if (country.alpha2Code === code) countryName = country.name;
    });

    if (!countryName && currentPage < totalPages) {
      return await getData(currentPage + 1);
    } else {
      return countryName;
    }
  }

  return await getData(0);
}

getCountryName("AF");