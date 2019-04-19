const Beers = require('./models/beers.js');
const BeerInfo = require('./views/beer_info.js');
const BeerSelectionView = require('./views/beer_selection_view.js');


document.addEventListener('DOMContentLoaded', () => {

  const beerData = new Beers();
  beerData.getData();
  beerData.bindEvent();

  const beerSeletion = new BeerSelectionView();
  beerSeletion.bindEvent();

  const beerView = new BeerInfo();
  beerView.bindEvent();

});
