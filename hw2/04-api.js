/** Exercise 04 - API **/

const url = "https://restcountries.com/v3.1/all";

// Add your code here
const getData = (url) => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((countries) => {
      countries.sort((a, b) => a.name.common > b.name.common);
      let ol = document.getElementById("results");
      countries.forEach((country) => {
        let li = document.createElement("li");
        li.innerText = `${
          country.name.common
        } - ${country.population.toLocaleString("en-US")}`;
        ol.appendChild(li);
      });
    })
    .catch((error) => console.error(error));
};

getData(url);
