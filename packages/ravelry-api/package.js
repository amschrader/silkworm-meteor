Package.describe({
  summary: "Ravelry API wrapper using OAuth1Binding of Meteor Ravelry Service",
  name: "ravelry-api"
});

Package.on_use(function (api, where) {
  api.use('oauth1', ['client', 'server']);
  api.add_files(['ravelry.js'], 'server');
  
  api.export && api.export('Ravelry', 'server');
});

Package.on_test(function (api) {
});