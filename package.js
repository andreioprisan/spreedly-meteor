Package.describe({
  summary: "Meteor bindings for Spreedly payment tokenization and charge processing"
  "version": "1.0.7",
  "git": "https://github.com/andreioprisan/spreedly-meteor.git",
  "name": "andreioprisan:spreedly-meteor"
});

Npm.depends({ 
	"spreedly-node": "0.1.0",
	"node-expat-meteor": "2.0.1",
	"xml2json": "0.3.2",
	"node-xml2json": "1.0.0"
});

Package.on_use(function(api) {
  configurePackage(api);

  api.export(['Spreedly']);
});

function configurePackage(api) {
  if(api.versionsFrom) {
    api.versionsFrom('METEOR@0.9.0');
  }

  api.add_files(['spreedly_npm.js'], 'server');
  api.add_files(['spreedly_client.js'], 'client');
}
