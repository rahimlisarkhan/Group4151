const url = (q) => `https://covid-19-statistics.p.rapidapi.com/reports?q=${q}`;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9d9588302emsh58804fa5a30d4d9p1b947ajsn659ea6ae2269",
    "X-RapidAPI-Host": "covid-19-statistics.p.rapidapi.com",
  },
};

const getReports = async (city) => {
  try {
    const response = await fetch(url(city), options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

getReports("Azerbaijan");
