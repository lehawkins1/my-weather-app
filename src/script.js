
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
h3.innerHTML = `${days[now.getDay()]} ${hours}:${minutes < 9 ? "0" + minutes:minutes}`;
console.log(days[now.getDay()+1]);
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
    let sug = document.querySelector("#see");
  sug.innerHTML = response.data.weather[0].description;
  let ptemperature = response.data.main.temp;
  let temperature = Math.round(ptemperature * 1.8 + 32);
  let hum = document.querySelector("#humidity");
  hum.innerHTML = Math.round(response.data.main.humidity) + "%";
  let wind = document.querySelector("#wind");
  wind.innerHTML = Math.round(response.data.wind.speed) + "mph";
  document.querySelector("#degree").innerHTML = `${temperature} °C`;
  let lon = response.data.coord.lon;
  let lat = response.data.coord.lat;
  
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${apiKey}&units=metric`
  axios.get(apiUrl).then(showForecast);
  console.log(apiUrl);
}

function showForecast(response){
  //On Thursday it prints Saturday
  
  let val =0;
  let day = days[now.getDay()] ;
  let query = document.querySelector("#day1");
  query.innerHTML = day;
  console.log(response.data.daily[0].temp + " next day");
  let high1 = document.querySelector("#high1")
  let high1t = Math.round(response.data.daily[1].temp.max * 1.8 + 32)
  high1.innerHTML = "High " + high1t + " °C";
  day = days[now.getDay()+1] ;

  let query2 = document.querySelector("#day2");
  query2.innerHTML = day;
    console.log(response.data.daily[0].temp + " next day");
  let high2 = document.querySelector("#high2")
  let high2t = Math.round(response.data.daily[1].temp.max * 1.8 + 32);
  high2.innerHTML = "High " +  high2t + " °C";

  day = days[now.getDay()+2] ;
  let query3 = document.querySelector("#day3");
  query3.innerHTML = day;
  console.log(response.data.daily[0].temp + " next day");
  let high3 = document.querySelector("#high3")
  let high3t = Math.round(response.data.daily[3].temp.max * 1.8 + 32)
  high3.innerHTML = "High " + high3t + " °C";
/* 
    day = days[now.getDay()+3] ;
  let query4 = document.querySelector("#day4");
  query4.innerHTML = day;
    console.log(response.data.daily[4].temp + " next day");
  let high4 = document.querySelector("#high4")
  let high4t = Math.round(response.data.daily[4].temp.max * 1.8 + 32)
  high4.innerHTML = "High " + high4t + " °C";

    day = days[now.getDay()+4] ;
  let query5 = document.querySelector("#day5");
  query5.innerHTML = day;
  let high5 = document.querySelector("#high5")
  let high5t = Math.round(response.data.daily[5].temp.max * 1.8 + 32)
  high5.innerHTML = "High " +  high5t + " °C";

    day = days[now.getDay()+5] ;
  let query6 = document.querySelector("#day6");
  query6.innerHTML = day;
  let high6 = document.querySelector("#high6")
  let high6t = Math.round(response.data.daily[6].temp.max * 1.8 + 32)
  high6.innerHTML = "High " + high6t + " °C";

    day = days[now.getDay()+6] ;
  let query7 = document.querySelector("#day7");
  query7.innerHTML = day;
  console.log(response.data.daily[7].temp + " next day");
  let high7 = document.querySelector("#high7")
  let high7t = Math.round(response.data.daily[0].temp.max * 1.8 + 32)
  high7.innerHTML ="High " +  high7t + " °C";
*/
  /*
  while(val<3){
    //grabs first day field day1
    console.log(days[now.getDay()+val]);
    day = days[now.getDay()+val];
    //prints out 
    query = document.querySelector("#day"+3);
    console.log(document.querySelector("#day"+2)+ "qus");
    //query.innerHTML = days[now.getDay()+1];
    console.log(days[now.getDay()+val]+ " in if");
    val++;
  }*/
  
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
      