if (Meteor.isServer) {
  Meteor.startup(function() {
    // code to run on server at startup
  });
  
}
var ravelry = new Ravelry();

Meteor.startup(function() {

  Accounts.loginServiceConfiguration.remove({
      service : 'ravelry'
  });

  Accounts.loginServiceConfiguration.insert({
    service: "ravelry",
    consumerKey: Meteor.settings.ravelryKey,
    secret: Meteor.settings.ravelrySecret
  });
});

Meteor.methods({
  getProjects: function(username) {
    if (!username) {
      var user = Meteor.user()
      if (user) {
        username = user.profile.username;
      }
    }
    console.log("server: " + username);
    return ravelry.getProjects(username).data;
  }
});