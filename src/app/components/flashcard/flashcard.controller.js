'use strict';

class FlashcardController {
  constructor () {
    'ngInject';
  }

  flip () {
    this.flipped = !this.flipped;
  }

  toggleBookmark () {
    this.bookmarked = !this.bookmarked;
  }
}

export default FlashcardController;
