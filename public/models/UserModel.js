var UserModel = Backbone.Model.extend ({
  idAttributes: '_id',
  defaults: {
    username: '',
    password: ''
  },
  url: '/register'
});