const apikey = "4132fb7c895399bfa34e133bf7b5c2d2";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const serachbox = document.querySelector("#src-box");
const serachbtn = document.querySelector(".srcbutton");

async function checkweather(city){
    const response = await fetch(apiurl + `&appiid=${apikey}` + city );
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".windspeed").innerHTML = math.round(data.main.speed) + " km/h";

}
serachbtn.addEventListener("click", ()=>{
    checkweather(serachbox.value);
})
