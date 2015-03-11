(function() {
    var module = angular.module('deal.utils');

    module.factory('Utils', function($ionicLoading) {

        var service = {

            isLoading: false,


            loading: loading,
            random: random
        };

        window.Utils = service;

        return service;


        function loading(state, message) {
            if (typeof state != 'undefined') {
                service.isLoading = state;
            } else {
                service.isLoading = !service.isLoading;
            }

            var content = '<i class="ion-loading-c" style="font-size:2em;"></i>';
            if (message) {
                content += '<br><div style="padding:10px 0 0;font-size:1.1em;">' + message + '</div>';
            }

            if (service.isLoading) {
                return $ionicLoading.show({
                    template: content,
                    animation: 'fade-in',
                    showBackdrop: false,
                    maxWidth: 200,
                    showDelay: 0
                });
            }

            return $ionicLoading.hide();
        }

        function random(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    });
})();
