Package.describe({
  name: 'goltfisch:cloudinary-server',
  summary: 'Cloudinary server-Library for Meteor (Wraps the NPM-Package for Meteor)',
  version: '0.1.0',
  git: 'https://github.com/goltfisch/meteor-cloudinary-server.git'
});

Package.onUse(function (api) {
  api.addFiles('cloudinary.js', 'server');

  api.export('cloudinary', 'server');
});

Npm.depends({
  cloudinary: '1.2.1'
});
