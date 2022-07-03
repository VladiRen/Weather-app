//display the current date and time using JavaScript: Tuesday 16:00
let now = new Date();
let minutes = now.getMinutes();
let hour = now.getHours();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednsday",
  "Thirsday",
  "Friday",
  "Suturday"
];
let day = days[now.getDay()];
let date = document.querySelector(".date");
date.innerHTML = `${day} ${hour}:${minutes}`;
//Add a search engine, when searching for a city (i.e. Paris), display the city name on the page after the user submits the form.

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#seach-text-input");
  
  if (searchInput.value) {
    
    getApiWeathe(searchInput.value);
  } else {
    alert(" Please enter the city, you want to find");
  }
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function getApiWeathe(city){
  const apiKey = "9bc670e84aaf757526d07fae85f853f1";
  let apiUrTemperature = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrTemperature).then(showTemperature);
}

function showTemperature(response) {
  //console.log(response.data);
  
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector(".temperature");
  temperatureElement.innerHTML = `${temperature}&degC`;
  let cityName = document.querySelector(".city");
  cityName.innerHTML = `${response.data.name}`;
  let wind = document.querySelector(".wind");
  wind.innerHTML = `${Math.round(response.data.wind.speed)}km/h`;
  
}

 /*
function showCityName (response){
  //let city = document.querySelector(".city");
  console.log(response.data);//not work
 
  
  let searchInput = document.querySelector("#seach-text-input");
   city.innerHTML =`${searchInput.value}`
   
}
showCityName();
*/
