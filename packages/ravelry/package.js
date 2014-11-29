Package.describe({
  summary: "Ravelry OAuth flow",
  // internal for now. Should be external when it has a richer API to do
  // actual API things with the service, not just handle the OAuth flow.
  internal: true,
  name: "ravelry"
});

Package.on_use(function(api) {
  api.use('http', ['client', 'server']);
  api.use('templating', 'client');
  api.use('oauth1', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('random', 'client');
  api.use('underscore', 'server');
  api.use('service-configuration', ['client', 'server']);

  api.export && api.export('Ravelry');

  api.add_files(
    ['ravelry-configure.html', 'ravelry-configure.js'],
    'client');

  api.add_files('ravelry-server.js', 'server');
  api.add_files('ravelry-client.js', 'client');
});