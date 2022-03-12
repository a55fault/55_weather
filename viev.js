import { deleteFunction } from "./main.js";
export let searchEvent = document.querySelectorAll(".up.searchForm");
export let likeEvent = document.querySelectorAll(".like.button");


let deleteTargetDom;

export function tabNowFilling(transmittedWeather) {
   let celsiusTemp = Math.round(Number(transmittedWeather.main.temp) - 273, 15);
   temp.innerHTML = `${celsiusTemp} \u00B0`;
   city.innerHTML = `${transmittedWeather.name}`;
   /* icon.innerHTML = `${transmittedWeather.weather[0].main}`; */
   weatherIcon.src = `http://openweathermap.org/img/wn/${transmittedWeather.weather[0].icon}@2x.png`

}

export function createLikedCityToHtml(likedCity) {
   document.querySelector(".rightUp").insertAdjacentHTML("afterend", `<div class="likedCity" id="${likedCity}">
    <p class="cityName">${likedCity}</p>
    <button class="button ex">x</button>
</div>`);
document.querySelector(".cityName").addEventListener("click", refillNow);
   document.querySelector(".button.ex").addEventListener("click", prepareToDeleteFunction);
}

 function prepareToDeleteFunction () {
deleteTargetDom = this.parentNode.id;
 this.parentNode.remove();
 deleteFunction(deleteTargetDom)
 
}

function refillNow () {
  let cityToSearch = this.parentNode.id;
     let weather;
   const apiKey = "f660a2fb1e4bad108d6160b7f58c555f";
const serverUrl = "https://api.openweathermap.org/data/2.5/weather";
    let url = `${serverUrl}?q=${cityToSearch}&appid=${apiKey}`
        fetch(url)
        .then((response) => response.json())
        .then(tabNowFilling)        
        
    
}


