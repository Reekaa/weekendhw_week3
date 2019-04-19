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

    const beerDescription = document.createElement('h3');
    beerDescription.textContent = beer.description;
    this.container.appendChild(beerDescription);

    const beerImg = document.createElement('img');
    beerImg.src = beer.image_url;
    this.container.appendChild(beerImg);
  }
  // createImage(imageUrl){
  //   const img = document.createElement('img');
  //   console.log(imageUrl);
  //   img.src = imageUrl;
  //   return img;
  // }


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

module.exports = BeerInfo;
