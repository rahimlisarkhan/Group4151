const url =
  "https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free&calories=200";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9d9588302emsh58804fa5a30d4d9p1b947ajsn659ea6ae2269",
    "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
  },
};

const getFoods = async () => {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

getFoods();
