(function() {
    var module = angular.module('deal.game', []);

    module.paths = {
        partials: 'components/game/partials/',
    };

    module.run(function($http, $rootScope, $timeout) {

    });

    module.config(function(stateHelperProvider, $urlRouterProvider) {
        stateHelperProvider
            .state({
                name: 'app.game',
                url: "/game",
                views: {
                    'menuContent': {
                        templateUrl: module.paths.partials + "game.html",
                        controller: 'gameController',
                    }
                },
            });
    });

})();
