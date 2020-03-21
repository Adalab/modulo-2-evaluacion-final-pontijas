'use strict';

// generic variables

const serieInput = document.querySelector('.js-search-input');
const btnSearch = document.querySelector('.js-search-btn');
const seriesDisplay = document.querySelector('.js-search-display');
const favSeriesList = document.querySelector('.js-fav-list');

// arrays

let series = [];
let favSeries = [];

// get data from API

function getData(ev) {
  ev.preventDefault();
  // console.log(serieInput.value);
  fetch(`http://api.tvmaze.com/search/shows?q=${serieInput.value}`)
    .then(response => response.json())
    .then(dataSerie => {
      series = dataSerie;
      paintCards();
    });
}

// paint data

function paintCards() {
  for (const serie of series) {
    let htmlCode = '';
    htmlCode += `<article class="css-card js-serie-card">`;
    htmlCode += `<h2>${serie.show.name}</h2>`;
    htmlCode += `<img src="${serie.show.image.medium}" alt="póster de la serie"`;
    htmlCode += `</article>`;
    seriesDisplay.innerHTML += htmlCode;
  }
}

btnSearch.addEventListener('click', getData);

// add to favorites

const serieCardBtns = document.querySelectorAll('.js-serie-card');
//   console.log(serieCardBtns);
function addToFavorites() {
  console.log('me han clickado');
}

serieCardBtns.addEventListener('click', addToFavorites);
