'use strict';

function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('Home', {
      url: '/',
      controller: 'HomeCtrl',
      controllerAs: 'home',
      templateUrl: 'views/home/home.html',
      title: 'Home'
    });

  $urlRouterProvider.otherwise('/');
}

export default OnConfig;
