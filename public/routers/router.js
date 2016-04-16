var BeerRouter = Backbone.Router.extend({
  routes: {
    'beers/:query': 'showReviews',
    '*default': 'showBeers'
  },

  showReviews: function (param) {
    var allBeers = appModel.get('beers');

    var currentBeer = allBeers.findWhere({ _id: param });

    // only navigate to the current beer if one exists
    if (currentBeer) {
      appModel.set('current_beer', currentBeer);
      appModel.set('show_reviews', true);
    } else {
      this.navigate("/#", true)
    }
  },

  showBeers: function () {
    appModel.set('show_reviews', false);
  }
});