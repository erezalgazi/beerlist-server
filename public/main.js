var appModel = new AppModel();

var appView = new AppView({ model: appModel });

appModel.get('beers').fetch({reset: true});

var beerRouter = new BeerRouter();
Backbone.history.start();