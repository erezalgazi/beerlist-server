var RegisterView = Backbone.View.extend({
  el: $('.register-container'),

  events: {
    'click .register': 'register'
  },

  register: function (e) {
    // console.log('clicked!');
    e.preventDefault();
    
    var user = new UserModel ({
      username: this.$('#register-username').val(),
      password: this.$('#register-password').val()
    });
    // console.log(user.toJSON());
    user.save({}, {
      success: function (user) {
        alert(user.get('username') + ' is succesfully registered');
        beerRouter.navigate('/', true);
      },
      error: function (user, response) {
        console.log(user);
        console.log(response);
      }
    });
  }
});