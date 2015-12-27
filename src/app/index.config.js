export function config ($logProvider, $mdThemingProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  // Configure material theme
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('red');
}
