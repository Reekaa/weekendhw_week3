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

    const beerDescription = document.createElement('p');
    beerDescription.textContent = `Description: ${beer.description}`;
    this.container.appendChild(beerDescription);

    const foodPairing = document.createElement('p');
    foodPairing.textContent = `Our food reommendation: ${beer.food_pairing[1]}`;
    this.container.appendChild(foodPairing);

    const beerImg = document.createElement('img');
    beerImg.src = beer.image_url;
    this.container.appendChild(beerImg);


  }


}

module.exports = BeerInfo;
