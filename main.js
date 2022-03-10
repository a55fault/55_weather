import { searchEvent } from "./viev.js";
import { likeEvent } from "./viev.js";
import { tabNowFilling } from "./viev.js";
import { createLikedCityToHtml } from "./viev.js";




const apiKey = "f660a2fb1e4bad108d6160b7f58c555f";
const serverUrl = "https://api.openweathermap.org/data/2.5/weather";
let cityToSearch;
let currentWeather;
let likedCities = [];


for (let elem of searchEvent) {
    elem.addEventListener("submit", searchFunction)
}
for (let elem of likeEvent) {
    elem.addEventListener("click", likeFunction)
}


function searchFunction() {

    cityToSearch = textToSearch.value;
    /* textToSearch.value = ""; */
    let url = `${serverUrl}?q=${cityToSearch}&appid=${apiKey}`
    fetch(url)
        .then((response) => response.json())
        .then(tabNowFilling);    
    


} /* .catch(err => alert(err)); */

function likeFunction() {
    likedCities.push(cityToSearch);
        createLikedCityToHtml(cityToSearch);
}

export function deleteFunction(deleteTargetDom) {
    likedCities.splice(`${deleteTargetDom}`, 1);
    

}