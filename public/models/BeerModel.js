var BeerModel = Backbone.Model.extend({
  defaults: {
    id: null,
    name: '',
    style: '',
    image_url: '',
    abv: null,
    edit_mode: false
  },

  parse: function (response) {
    response.id = response._id;

    return response;
  }
});