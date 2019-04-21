const PubSub = require('../helpers/pub_sub.js');

class BeerInfo {

  constructor(){
    this.container = document.querySelector('#beer-info');
  }

  bindEvent(){
    PubSub.subscribe('Beer:SelectedBeer-ready', (event) => {
      const beer = event.detail
      this.render(beer);
    })
  }

  render(beer){
    const beerName = document.createElement('h2');
    beerName.textContent = beer.name;
    this.container.appendChild(beerName);

    const beerTag = document.createElement('h3');
    beerTag.textContent = beer.tagline;
    this.container.appendChild(beerTag);

    const beerAbv = document.createElement('h4');
    beerAbv.textContent = `ABV: ${beer.abv}`;
    this.container.appendChild(beerAbv);

    const beerDescription = document.createElement('p');
    beerDescription.textContent = `Description: ${beer.description}`;
    this.container.appendChild(beerDescription);

    const foodPairing = document.createElement('p');
    foodPairing.textContent = `Food reommendation: ${beer.food_pairing[1]} and ${beer.food_pairing[2]}`;
    this.container.appendChild(foodPairing);

    const tip = document.createElement('p');
    tip.textContent = `Brewers tips: ${beer.brewers_tips}`;
    this.container.appendChild(tip);

    const beerImg = document.createElement('img');
    beerImg.src = beer.image_url;
    this.container.appendChild(beerImg);
  }
}

module.exports = BeerInfo;
