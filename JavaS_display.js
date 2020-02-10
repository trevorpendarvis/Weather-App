response = JSON.parse(localStorage.getItem('storeObj'));
console.log(response);
var description,temp,city,humidity,wind_speed;


description = response.weather[0].description;
temp = response.main.temp;
humidity = response.main["humidity"];
wind_speed = response.wind.speed;
city = response.name;
convert();


function convert() {
    temp = Math.trunc((temp - 273.15)*(9/5)+32);
}


document.getElementById("name").innerHTML = city;
document.getElementById("2").innerHTML = "Temp: " + temp + "F";
document.getElementById("3").innerHTML = "Wind Speed: " + wind_speed +" "+"Miles/Hour";
document.getElementById("4").innerHTML = "Humidity: " + humidity + "%";
document.getElementById("5").innerHTML = "Description: " + description;
