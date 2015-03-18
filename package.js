Package.describe({
  name: 'praxie:flag-sprites',
  version: '1.0.0',
  summary: 'CSS Sprite generator for country flags',
  git: 'https://github.com/Praxie/meteor-flag-sprites.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.addFiles('flags.css');
  api.addFiles('flags.png');
});