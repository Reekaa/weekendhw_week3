const Beers = require('./models/beers.js');
const BeerView = require('./views/beer_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const beerData = new Beers();
  beerData.getData();

  const beerView = new BeerView();
  beerView.bindEvent();
});
