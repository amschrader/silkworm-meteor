Package.describe({
  summary: "Ravelry Package",
  name: "ravelry"
});

Package.on_use(function(api) {
  api.add_files('ravelry.js', 'server');
  
  api.export('RavelryApi');
});