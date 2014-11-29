if (Meteor.isClient) {
  Session.setDefault("projects", []);

  Template.home.helpers({
    projects: function() {
      return Session.get("projects");
    }
  });

  Template.home.rendered = function() {
    Meteor.call('getProjects', function(error, results) {
      Session.set("projects", results.projects);
    });
  }
}