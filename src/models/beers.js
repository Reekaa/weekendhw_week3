const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

class Beers {

  constructor(){
    this.data = [];
  }

  getData() {
    const url = `https://api.punkapi.com/v2/beers`
    const requestHelper = new RequestHelper(url);

    requestHelper.get()
      .then(data => {
        this.data = data;
        PubSub.publish('Beers:beer-data-loaded', this.data)
      })
      .catch(message => {
        console.error(message);
      })
  }

}

module.exports = Beers;
