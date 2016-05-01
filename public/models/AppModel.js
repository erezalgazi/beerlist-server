var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      beers: new BeersCollection(),

      current_beer: null,

      // either true or false
      // show_reviews: false
      view: 'beers' //beers here is just a string
    }
  },

  initialize: function () {
    this.on('change:current_beer', this._setReviewsUrl);
  },

  _setReviewsUrl: function () {
    var beer = this.get('current_beer');
    var id = beer.get('_id');

    beer.get('reviews').url = '/beers/' + id + '/reviews';
  }
});