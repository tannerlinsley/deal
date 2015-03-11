(function() {
    var module = angular.module('deal.game');

    module.controller('gameController', function($scope, Cards) {

        $scope.card = {
            name: 'Tap to Draw!',
        };

        $scope.Cards = Cards;

        Cards.build();

        $scope.draw = function() {
            $scope.card = Cards.draw();
        };

    });
})();
