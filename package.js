Package.describe({
  name: 'pbastowski:ft-base',
  version: '0.0.4',
  // Brief, one-line summary of the package.
  summary: 'FastTrack base packages',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/pbastowski/ft-base',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.imply('urigo:angular@0.9.1');
  api.imply('angularui:angular-ui-router@0.2.15');
  api.imply('angularui:angular-ui-bootstrap@0.13.0');
  api.imply('twbs:bootstrap@3.3.5');
  api.imply('fourseven:scss@3.1.1');
  api.imply('less@1.0.14');
  api.imply('mquandalle:jade@0.4.3');
  api.imply('civilframe:angular-jade@0.0.3');
  api.imply('pbastowski:angular-babel@0.1.7');
  api.imply('pbastowski:angular2-now@0.2.9');
  api.imply('pbastowski:require@0.0.3');
});
