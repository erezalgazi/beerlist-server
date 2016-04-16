var BeerRouter = Backbone.Router.extend({
  routes: {
    'beers/:query': 'showReviews',
    '*default': 'showBeers'
  },

  showReviews: function (param) {
    var allBeers = appModel.get('beers');

    allBeers.fetch({success: function () {
      var currentBeer = allBeers.findWhere({ _id: param });

      appModel.set('current_beer', currentBeer);
      appModel.set('show_reviews', true);
    }});
  },

  showBeers: function () {
    appModel.set('show_reviews', false);
  }
});