var BeerRouter = Backbone.Router.extend({
  routes: {
    'beers/:id': 'showReviews',
    'register': 'renderRegister',
    '*default': 'showBeers' 
  },

  showReviews: function (id) {
    var allBeers = appModel.get('beers');

    var currentBeer = allBeers.findWhere({ _id: id });
    console.log('reviews page');
    appModel.set('current_beer', currentBeer);
    // appModel.set('show_reviews', true);
    appModel.set('view', 'reviews'); //reviews here is just a string
  },

  showBeers: function () {
    console.log('beers page');
    // appModel.set('show_reviews', false);
    appModel.set('view', 'beers');
  },

  renderRegister: function () {
    console.log('register page');
    appModel.set('view', 'register');
  }
});