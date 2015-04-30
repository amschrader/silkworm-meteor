Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

projectController = RouteController.extend({
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