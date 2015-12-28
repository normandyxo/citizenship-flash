'use strict';

import {FlashcardDirective} from './flashcard.directive';

let  moduleName = 'flashcard.module';
let flashcardModule = angular.module(moduleName, []);

flashcardModule.directive('flashcard', FlashcardDirective);

export default moduleName;
