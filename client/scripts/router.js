Router.plugin('loading');

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

projectController = RouteController.extend({
  waitOn: function() {
    var projectId = this.params.id;
    return Meteor.subscribe("project", projectId);
  },
  data: function() {
    return {
      projectId: this.params.id
    };
  }
});

Router.map(function() {
  this.route('home', {
    path: '/'
  });

  this.route('project', {
    path: '/project/:id',
    controller: 'projectController'
  });
});