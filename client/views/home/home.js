
Session.setDefault("projects", []);

Template.home.helpers({
  projects: function() {
    return Session.get("projects");
  }
});

Template.home.rendered = function() {
  Meteor.call('getProjects', function(error, results) {
    if (results) {
      var projects = results.projects || [];
      Session.set("projects", projects);
    }
  });
}
