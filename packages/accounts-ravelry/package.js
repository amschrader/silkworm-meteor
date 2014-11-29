Package.describe({
  summary: "Login service for Ravelry accounts",
  name: "accounts-ravelry"
});

Package.on_use(function(api) {
  api.use('underscore', ['server']);  
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('ravelry', ['client', 'server']);

  api.use('http', ['client', 'server']);

  api.add_files('ravelry-login-button.css', 'client');
  api.add_files('ravelry.js');
  api.add_files('ravelry-common.js', ['client', 'server']);
});