Package.describe({
  summary: "Meteor bindings for Spreedly payment tokenization and charge processing"
});

Npm.depends({ 
	"spreedly-node": "0.1.0",
	"node-expat-meteor": "2.0.1",
	"xml2json": "0.3.2",
	"node-xml2json": "1.0.0"
});

Package.on_use(function(api, where) {
  if (api.export) {
  	api.export('Spreedly');
  }

  api.add_files('spreedly_npm.js', 'server');
  api.add_files('spreedly_client.js', 'client');
});