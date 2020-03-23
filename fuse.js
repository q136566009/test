require('./angular-resource')
require('./angular-fullscreen')
window.pyfl = require('./pyfl')
require('./core')
require('./ext')
require('./frame')

angular
  .module('fuse', [
    'fuse.core',
    'fuse.ext',
    'fuse.frame'
  ])
