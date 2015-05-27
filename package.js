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
  api.use('urigo:angular-ui-router@0.7.0');
  api.use('angularui:angular-ui-bootstrap@0.13.0');
  api.use('twbs:bootstrap@3.3.4');
  api.use('fourseven:scss@3.1.1');
  api.use('less@1.0.14');
  api.use('mquandalle:jade@0.4.3');
  api.use('civilframe:angular-jade@0.0.3');
  api.use('pbastowski:angular2-now@0.2.4');
  api.use('pbastowski:require@0.0.1');

  api.addFiles('ft-base.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('pbastowski:ft-base');
  api.addFiles('ft-base-tests.js');
});
