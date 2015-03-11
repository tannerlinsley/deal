(function() {

    var module;

    module = window.app = angular.module('deal', [
        // Libs
        'ionic',
        'ui.router.stateHelper',

        // App
        'deal.utils',
        'deal.cards',
        'deal.navigation',
        'deal.game'
    ])

    .config(function($controllerProvider, $provide, $compileProvider, $sceDelegateProvider) {
        // Let's keep the older references.
        module._controller = module.controller;
        module._service = module.service;
        module._factory = module.factory;
        module._value = module.value;
        module._directive = module.directive;
        // Provider-based controller.
        module.controller = function(name, constructor) {
            $controllerProvider.register(name, constructor);
            return (this);
        };
        // Provider-based service.
        module.service = function(name, constructor) {
            $provide.service(name, constructor);
            return (this);
        };
        // Provider-based factory.
        module.factory = function(name, factory) {
            $provide.factory(name, factory);
            return (this);
        };
        // Provider-based value.
        module.value = function(name, value) {
            $provide.value(name, value);
            return (this);
        };
        // Provider-based directive.
        module.directive = function(name, factory) {
            $compileProvider.directive(name, factory);
            return (this);
        };
        // Provider-based filter.
        module.filter = function(name, factory) {
            $filterProvider.filter(name, factory);
            return (this);
        };

    })

    .run(function($ionicPlatform, $http) {
        if (navigator.spashscreen) {
            navigator.splashscreen.hide();
        }
        $ionicPlatform.ready(function() {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    });
})();
