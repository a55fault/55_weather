/* import { searchEvent } from "./view.js";
import { likeEvent } from "./view.js"; */
import {uiElements, tabNowFilling, createLikedCityToHtml} from "./view.js";

const apiKey = "7616f320a6b51b780c0f577426668068";
const serverUrl = "https://api.openweathermap.org/data/2.5/weather";
let cityToSearch;
let likedCities = [];

if (localStorage.likedCity) {
    /* console.log (localStorage.likedCity, cityToSearch); */
    textToSearch.value = localStorage.findCity;
search();
}



    uiElements.searchEvent.addEventListener("submit", search);
    uiElements.likeEvent.addEventListener("click", like);

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
    localStorage.setItem("favorite", JSON.stringify(likedCities))
    localStorage.setItem("findCity", cityToSearch);
    console.log (localStorage.favorite);
    createLikedCityToHtml(cityToSearch);
}

export function deleteOut(deleteTargetDom) {
    likedCities.splice(`${deleteTargetDom}`, 1);
}