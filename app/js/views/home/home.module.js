import { HomeCtrl } from './home.controller';

const homeModuleName = 'czFlash.home';
const requires = [];

angular.module(homeModuleName, requires);

angular.module(homeModuleName).controller('HomeCtrl', HomeCtrl);

export default homeModuleName;
