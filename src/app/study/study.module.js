'use strict';

import { default as flashcardModule} from '../components/flashcard/flashcard.module';
import StudyController from './study.controller';

let moduleName = 'study.module';

angular.module(moduleName, [
  flashcardModule
])
.controller('StudyController', StudyController);

export default moduleName;
