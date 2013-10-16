Package.describe({
  summary: "Meteor bindings for Spreedly payment tokenization and charge processing"
});

Npm.depends({ "spreedly-node": "0.1.0" });

Package.on_use(function(api) {
  if (api.export) api.export('Spreedly', 'server');        
  api.add_files('spreedly_npm.js', 'server');
});