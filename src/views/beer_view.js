const PubSub = require('../helpers/pub_sub.js');

class BeerView {

  constructor(){
    this.element = document.querySelector('#beer-list');
  }

  bindEvent(){
    PubSub.subscribe('Beers:beer-data-loaded', (evt) => {
      this.getBeers(evt.detail);


    });
  }

  getBeers(bearData){
    bearData.forEach((beer) => {
      const option = document.createElement('option');
      option.textContent = beer.name;
      this.element.appendChild(option);
    })
  }


  // getBeersbyImage(beers){
  //   this.clearBeer();
  //
  //   beers.forEach((beer) => {
  //     const img = this.createImage(beer.image_url);
  //     this.element.appendChild(img);
  //   });
  // }
  //
  // clearBeer(){
  //   this.element.innerHTML = ' ';
  // }
  //
  // createImage(imageUrl){
  //   const img = document.createElement('img');
  //   console.log(imageUrl);
  //   img.src = imageUrl;
  //   return img;
  // }
}

module.exports = BeerView;
