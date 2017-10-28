angular.module('app').directive('cards', [cardsDirective]);

function cardsDirective() {

  return {
    templateUrl: 'views/cards.html'
  };
}

