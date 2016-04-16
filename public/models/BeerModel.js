var BeerModel = Backbone.Model.extend({
  idAttribute: '_id',

  defaults: function () {
    return {
      name: '',
      style: '',
      image_url: '',
      abv: null,
      edit_mode: false,
      reviews: new ReviewsCollection()
    }
  },

  parse: function (response) {
    var reviews = this.get('reviews') || new ReviewsCollection();

    reviews.set(response.reviews);

    response.reviews = reviews

    return response;
  }
});