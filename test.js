const coinContainer = document.querySelector('.coin-container')
const search_input = document.querySelector('.coin-input')
//search_input = '';
//let data = [];

fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(response => response.json())
    .then(result => {
        //data = result
            result.map(data => {
             //addToDom(data)
            console.log(data)
        })
    })
function addToDom(data){
    let coinRow = document.createElement('div');
    coinRow.className.add('coin-row');
//creat image
    const imageElement =document.createElement('img');
    imageElement.className.add('coin-img');
    imageElement.setAttribute(src , data.image)
    imageElement.setAttribute(alt ,data.alt)
    coinRow.appendChild(imageElement)
//add name
    const nameElement= document.createElement('h1')
    nameElement.textContent = data.name;
    coinRow.appendChild(nameElement)
//symbol element
    const symbolElement=document.createElement('p');
    symbolElement.textContent = data.symbol;
    symbolElement.classList.add('coin-symbol')
    coinRow.appendChild(symbolElement)
//add coin data
const coinData = document.createElement('div')
coinData.classList.add('coin-data');
const coinPrice = document.createElement('p')
coinPrice.classList.add('coin-price')
coinPrice.innerText = `$${data.current_price}`;
const coinVolume = document.createElement('p')
coinVolume.classList.add('coin-volume')
coinVolume.innerText = `$${data.total_volume.toLocaleString()}`
const coinPercent = document.createElement('p');
coinPercent.classList.add('coin-percent')
}