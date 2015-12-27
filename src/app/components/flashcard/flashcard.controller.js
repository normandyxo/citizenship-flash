'use strict';

class FlashcardController {
  constructor ($scope) {
    'ngInject';
    this.flipped = false;

    console.log(this);
    console.log($scope);
  }

  flip () {
    this.flipped = !this.flipped;
  }


}

export default FlashcardController;
