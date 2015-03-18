Package.describe({
  name: 'praxie:flag-sprites',
  version: '0.0.1',
  summary: 'CSS Sprite generator for country flags',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.addFiles('flags.css');
  api.addFiles('flags.png');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('flag-sprites');
});
