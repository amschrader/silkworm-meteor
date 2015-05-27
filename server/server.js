if (Meteor.isServer) {
  Meteor.startup(function() {
    // code to run on server at startup
  });

}
var ravelry = new Ravelry();

Meteor.startup(function() {
  Accounts.loginServiceConfiguration.remove({
    service: 'ravelry'
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


Meteor.publish("project", function(projectId) {
  var self = this;
  try {
    var username;
    if (this.userId) {
      var user = Meteor.users.findOne(this.userId);
      // var user is the same info as would be given in Meteor.user();
      username = user.profile.username;
    }

    // boo, need to pass a user to the ravelry api becuase it cannot acess 
    // Meteor.user() within a publish method. find a better way to do this later.
    if (ravelry.getUserId() !== this.userId) {
      ravelry.setUserId(this.userId);
    }

    console.log("server: " + username + " fetching projectId:" + projectId);
    var results = ravelry.getProject(username, projectId).data;
    var project = results.project || {};

    self.added("projects", projectId, project);
    self.ready();

  } catch (error) {
    console.log(error);
  }
})