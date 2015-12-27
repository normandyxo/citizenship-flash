'use strict';

import {FlashcardDirective} from './flashcard.directive';

var  moduleName = 'flashcard.module';

angular.module(moduleName, [])
    .directive('flashcard', FlashcardDirective);

export default moduleName;
