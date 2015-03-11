(function() {

    var module = angular.module('deal.navigation', []);

    module.config(function(stateHelperProvider, $urlRouterProvider) {
        stateHelperProvider
            .state({
                name: 'app',
                url: "/app",
                abstract: true,
                templateUrl: "components/navigation/menu.html",
                controller: 'navigationController',
            });
        $urlRouterProvider.otherwise('/app/game');
    });
})();
