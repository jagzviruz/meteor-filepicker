Package.describe({
  name: 'jagzviruz:filepicker',
  version: '0.0.4',
  // Brief, one-line summary of the package.
  summary: 'DO NOT USE from package. If you need it, clone the repo to your packages directory.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jagzviruz/meteor-filepicker.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles(['filepicker.js'],'client');
  api.export('filepicker', 'client');
});