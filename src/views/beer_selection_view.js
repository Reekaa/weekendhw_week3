const PubSub = require('../helpers/pub_sub.js');

class BeerSelectionView {

  constructor(){
    this.element = document.querySelector('select#beer-list');
  }

  bindEvent(){
    PubSub.subscribe('Beers:beer-data-loaded' ,(event) => {
      const beerData = event.detail;
      this.populateSelect(beerData);
    });

    this.element.addEventListener('change', (event) =>{
      const selectedBeerIndex = event.target.value;
      PubSub.publish('BeerSelection:change', selectedBeerIndex);
    });
}
  
  populateSelect(beerData){
    beerData.forEach((beer, index) => {
      const option = document.createElement('option');
      option.textContent = beer.name;
      option.value = index;
      this.element.appendChild(option);

    });
  }
}

module.exports = BeerSelectionView;
