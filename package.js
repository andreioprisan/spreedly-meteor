Package.describe({
  summary: "Meteor bindings for Spreedly payment tokenization and charge processing"
});

Npm.depends({ 
	"spreedly-node": "0.1.0",
	"node-expat": "2.0.0",
	"xml2json": "0.3.2"
});

Package.on_use(function(api, where) {
  if (api.export) {
  	api.export('Spreedly');
  }
  where = where || ['client', 'server'];

  api.add_files('spreedly_npm.js', where);
});