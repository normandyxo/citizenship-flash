'use strict';

import StudyController from './study.controller'

var moduleName = 'study.module';

angular.module(moduleName, [])
    .controller('StudyController', StudyController);

export default moduleName;
