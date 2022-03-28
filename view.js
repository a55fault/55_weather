import { deleteOut } from "./main.js";
/* export let searchEvent = document.querySelectorAll(".up.searchForm");
export let likeEvent = document.querySelectorAll(".like.button"); */

export let uiElements = {searchEvent : document.querySelector(".up.searchForm"),
          likeEvent : document.querySelector(".like.button"),

}

let deleteTargetDom;

if (localStorage.favorite) {
    fillOnStart();
}

export function tabNowFilling(transmittedWeather) {
   let celsiusTemp = Math.round(Number(transmittedWeather.main.temp) - 273,15);
   temp.innerHTML = `${celsiusTemp} \u00B0`;
   city.innerHTML = `${transmittedWeather.name}`;
   weatherIcon.src = `https://openweathermap.org/img/wn/${transmittedWeather.weather[0].icon}@2x.png`
   cityNow.innerHTML = `${transmittedWeather.name}`;
   weater.innerHTML = `weather: ${transmittedWeather.weather[0].main}`;
}

export function createLikedCityToHtml(likedCity) {
   document.querySelector(".rightUp").insertAdjacentHTML("afterend", `<div class="likedCity" id="${likedCity}">
    <p class="cityName">${likedCity}</p>
    <button class="button ex">x</button>
</div>`);
   document.querySelector(".cityName").addEventListener("click", refillTabNow);
   document.querySelector(".button.ex").addEventListener("click", prepareToDelete);
}

function prepareToDelete() {
   deleteTargetDom = this.parentNode.id;
   this.parentNode.remove();
   deleteOut(deleteTargetDom);
}

   function refillTabNow() {
   let cityToSearch = this.parentNode.id;
   let weather;
   const apiKey = "7616f320a6b51b780c0f577426668068";
   const serverUrl = "https://api.openweathermap.org/data/2.5/weather";
   let url = `${serverUrl}?q=${cityToSearch}&appid=${apiKey}`
   fetch(url)
      .then((response) => response.json())
      .then(tabNowFilling)
}

function fillOnStart () {
   let startList = JSON.parse(localStorage.favorite);
   startList.forEach((item) => createLikedCityToHtml(item));
}
