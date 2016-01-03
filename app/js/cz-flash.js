'use strict';

import angular from 'angular';

// angular modules
import 'angular-material';
import 'angular-ui-router';
import './templates';

import { MainCtrl } from './main.controller';
import { default as homeModule} from './views/home/home.module';


// create and bootstrap application
const requires = [
  'ngMaterial',
  'ui.router',
  'templates',
  homeModule
];

// mount on window for testing
window.czFlash = angular.module('czFlash', requires);

angular.module('czFlash').constant('AppSettings', require('./constants'));

angular.module('czFlash').config(require('./config'));

angular.module('czFlash').run(require('./run'));

angular.module('czFlash').controller('MainCtrl', MainCtrl);

angular.bootstrap(document, ['czFlash'], {
  strictDi: true
});
