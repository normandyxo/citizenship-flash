import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';

import { default as studyModule} from './study/study.module';

angular.module('citizenshipFlash', [
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ngMessages',
  'ngAria',
  'ngResource',
  'ui.router',
  'ngMaterial',
  'toastr',

  studyModule
])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController);
