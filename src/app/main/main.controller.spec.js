describe('controllers', () => {
  let vm;

  beforeEach(angular.mock.module('citizenshipFlash'));

  beforeEach(inject(($controller) => {
    vm = $controller('MainController');
  }));
});
