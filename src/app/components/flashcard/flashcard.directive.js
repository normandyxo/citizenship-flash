'use strict';

import FlashcardController from './flashcard.controller';

export function FlashcardDirective () {
  'ngInject';

  let directive = {
    templateUrl: 'app/components/flashcard/flashcard.html',
    controller: FlashcardController,
    controllerAs: 'flashcard',
    bindToController: true,
    scope: {
      flipped: '=',
      question: '=',
      answer: '=',
      bookmarked: '='
    }
  };

  return directive;
}
