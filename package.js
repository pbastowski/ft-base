Package.describe({
  name: 'pbastowski:ft-base',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'FastTrack base packages',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('urigo:angular');
  api.use('urigo:angular-ui-router');
  api.use('angularui:angular-ui-bootstrap');
  api.use('twbs:bootstrap');
  api.use('fourseven:scss');
  api.use('less');
  api.use('mquandalle:jade');
  api.use('civilframe:angular-jade');
  api.use('pbastowski:angular2-now');
  api.use('pbastowski:ft-require');
  api.use('urigo:angular-ui-router');

  api.addFiles('ft-base.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('pbastowski:ft-base');
  api.addFiles('ft-base-tests.js');
});
