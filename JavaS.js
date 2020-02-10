



var link, zipcode, CC, API, appid, temp,City;
link = "https://api.openweathermap.org/data/2.5/weather?zip=";
CC = "us";
zipcode = "0";
appid = "765b20e0d3698a9c0434dee2606868cc";

document.querySelector("#submit").addEventListener("click", function () {
   zipcode = document.getElementById("value").value;
    API = link + zipcode + "," + CC + "&appid=" + appid;
    if (API != null){
        APIcall();

    }

});


function APIcall() {
    var response;
    var Http = new XMLHttpRequest();
    Http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200) {
            response = JSON.parse(Http.responseText);
            City = response.name;
            temp = response.main.temp;

            console.log(temp + "  " + City);
            console.log(response);
            localStorage.setItem('storeObj', JSON.stringify(response));
            location.replace("display.html");
        }

    }



    Http.open("GET",API,true);
    Http.send();


}



