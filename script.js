
let now = new Date();
let day = now.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let hours = now.getHours();
let minutes = now.getMinutes();
let h3 = document.querySelector("#currentDayTime");
h3.innerHTML = `${days[now.getDay()]} ${hours}:${minutes} `;
//Feature #2
let apiKey = "1fe0cb2642f20c2da9d281f388283c50";
let form = document.querySelector("#form");
//  let submit = document.querySelector("#localTemp");
form.addEventListener("submit", search);
function search(event) {
  event.preventDefault();
  //Search is the data typed into the input box.
  let city = document.querySelector("#search");
  //Section directly above the day and time.
  let newCity = document.querySelector("#currentCity");
  //Change the valueu of default City to the city that was input by the user.
  newCity.innerHTML = `${city.value[0].toUpperCase() + city.value.slice(1)}`;

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
//display temperature in Celcius
function showTemperature(response) {
  let ptemperature = response.data.main.temp;
  let temperature = Math.round(ptemperature * 1.8 + 32);
  document.querySelector("#degree").innerHTML = `${temperature} °C`;
}
/*
let currentLocationbutton = document.querySelector("#current-location");
currentLocationbutton.addEventListener("click", getCurrentLocation);
function getCurrentLocation(event) {
  navigator.geolocation.getCurrentPosition(searchLocation);
}
function searchLocation(position) {
  
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  axios.get(apiUrl).then(search);
}*/
//function search(event){
 // event.preventDefault();
//  console.log(event);
 // let newPosition = position
//}
      

        /*
        let celcius = document.querySelector("#celcius");
        let fahrenheit = document.querySelector("#fahrenheit");

        );}
        // console.log(temperature);

        //degrees.innerHTML = `${temperature}`;
        //console.log(degrees.innerHTML);
      
        celcius.addEventListener("click", celciusConversion);
        fahrenheit.addEventListener("click", fahrenheitConversion);
        console.log(celciusConversion());
        function celciusConversion() {
          event.preventDefault();
          let celc = degrees.innerHTML;
          degrees.innerHTML = `${celc}`;
        }
      
      

     


      function displayWeatherCondition(event){
        event.preventDefault();
        
      }


     

        function fahrenheitConversion() {
          event.preventDefault();
          let fahr = document.querySelector("#degree").innerHTML;
          let degree = fahr * 1.8 + 32;
          document.querySelector("#degree").innerHTML = `${Math.round(degree)}`;
        }*/
      