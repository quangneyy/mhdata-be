const path = require('path');

module.exports = {
  'config': path.resolve('./src/config', 'config.json'),
  'migrations-path': path.resolve('./src/migrations', 'migrations'),
  'models-path': path.resolve('./src/models', 'models'),
  'seeders-path': path.resolve('./src/seeders', 'seeders'),
};