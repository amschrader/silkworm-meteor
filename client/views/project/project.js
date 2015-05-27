Template.project.helpers({
  project: function() {
    var projectId = parseInt(this.projectId);
    return Projects.findOne({
      id: projectId
    });
  },

  image: function() {
    var projectId = parseInt(this.projectId);
    var project = Projects.findOne({
      id: projectId
    });

    return project.photos[0].medium_url;
  }
});