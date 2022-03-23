import { searchEvent } from "./view.js";
import { likeEvent } from "./view.js";
import { tabNowFilling } from "./view.js";
import { createLikedCityToHtml } from "./view.js";

const apiKey = "7616f320a6b51b780c0f577426668068";
const serverUrl = "https://api.openweathermap.org/data/2.5/weather";
let cityToSearch;
let likedCities = [];

if (localStorage.likedCity) {
    /* console.log (localStorage.likedCity, cityToSearch); */
    textToSearch.value = localStorage.likedCity;
search();
}

for (let elem of searchEvent) {
    elem.addEventListener("submit", search)
}
for (let elem of likeEvent) {
    elem.addEventListener("click", like)
}

async function search() {
    cityToSearch = textToSearch.value;
    textToSearch.value = "";
    let url = `${serverUrl}?q=${cityToSearch}&appid=${apiKey}`    
        let response = await fetch(url)
        tabNowFilling ( await response.json())       
        .catch(err => alert(err));
}

function like() {
    likedCities.push(cityToSearch);
    localStorage.setItem("likedCity", cityToSearch);
    console.log (localStorage.likedCity);
    createLikedCityToHtml(cityToSearch);
}

export function deleteOut(deleteTargetDom) {
    likedCities.splice(`${deleteTargetDom}`, 1);
}