Package.describe({
  name: 'pbastowski:ft-base',
  version: '0.0.3',
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
  api.imply('urigo:angular');
  api.imply('angularui:angular-ui-router');
  api.imply('angularui:angular-ui-bootstrap');
  api.imply('twbs:bootstrap');
  api.imply('fourseven:scss');
  api.imply('less');
  api.imply('mquandalle:jade');
  api.imply('civilframe:angular-jade');
  api.imply('pbastowski:angular-babel');
  api.imply('pbastowski:angular2-now');
  api.imply('pbastowski:require');
});
