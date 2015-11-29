export function routerConfig ($locationProvider, $stateProvider,
  $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('study', {
      url: 'study',
      templateUrl: 'app/study/study.html',
      controller: 'StudyController',
      controllerAs: 'ctrl'
    });

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
}
