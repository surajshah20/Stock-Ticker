import { getStockData } from './fakeStockAPI.js'

const nameElement = document.getElementById("name")
const symbolElement = document.getElementById("symbol")
const priceElement = document.getElementById("price")
const timeElement = document.getElementById("time")
const indicatorElement = document.getElementById("indicator")

setInterval(function(){
    const stockData = getStockData()
    renderStockTicker(stockData)
}, 1500)

let previousPrice = 0

function renderStockTicker(stockData) {
    const {name, sym, price, time, indicator} = stockData

    const currentPrice = parseFloat(price);

    let color;
    let symbol;

    if (currentPrice > previousPrice) {
        color = 'green';
        symbol = '\u25b2'; // Up-pointing Triangle
    } else if (currentPrice < previousPrice) {
        color = 'red';
        symbol = '\u25bc'; // Down-pointing Triangle
    } else {
        color = 'gray';
        symbol = '\u2014'; // Em Dash
    }
    
    // Set the styles and text
    indicatorElement.style.color = color;
    priceElement.style.color = color; // Apply color to price as well
    
    nameElement.innerText = name
    priceElement.innerText = currentPrice
    symbolElement.innerText = sym
    timeElement.innerText = time
    // Display the Unicode symbol
    indicatorElement.textContent = symbol; 

    // Update the tracker
    previousPrice = currentPrice
}