(function() {
    var module = angular.module('deal.cards');

    module.factory('Cards', function(Utils) {

        var service = {

            // Props
            drawPile: [],
            dealt: [],
            used: [],

            // Methods
            build: build,
            clear: clear,
            draw: draw,

        };

        window.Cards = service;

        return service;






        function draw() {

            if (!service.drawPile.length) {
                if (!service.used.length) {
                    console.log('Out of Cards!');
                    return;
                }
                service.drawPile = angular.copy(service.used);
                service.used = [];
            }

            var index = Utils.random(0, service.drawPile.length - 1);
            var card = service.drawPile[index];
            service.drawPile.splice(index, 1);
            service.dealt.push(card);
            return card;
        }

        function clear() {
            service.drawPile = [];
            service.used = [];
        }

        function build(decks) {

            var cards = [];

            if (!decks) {
                decks = 1;
            }

            for (var i = 0; i < decks; i++) {
                angular.forEach(types(), function(type, typeName) {
                    angular.forEach(type, function(card) {
                        for (var i = 0; i < card.amount; i++) {
                            var c = angular.extend(card, {

                            });
                            cards.push(c);
                        }
                    });
                });
            }

            console.log(cards);

            service.drawPile = service.drawPile.concat(cards);

        }

        function types() {
            return {
                action: [{
                    amount: 2,
                    name: "Deal Breaker"
                }, {
                    amount: 3,
                    name: "Just Say No"
                }, {
                    amount: 3,
                    name: "Sly Deal"
                }, {
                    amount: 4,
                    name: "Force Deal"
                }, {
                    amount: 3,
                    name: "Debt Collector"
                }, {
                    amount: 3,
                    name: "It’s My Birthday"
                }, {
                    amount: 10,
                    name: "Pass Go"
                }, {
                    amount: 3,
                    name: "House"
                }, {
                    amount: 3,
                    name: "Hotel"
                }, {
                    amount: 2,
                    name: "Double The Rent Cards"
                }, ],

                property: [{
                    amount: 1,
                    name: "Green Set"
                }, {
                    amount: 1,
                    name: "Dark Blue Set"
                }, {
                    amount: 1,
                    name: "Light Blue Set"
                }, {
                    amount: 1,
                    name: "Red Set"
                }, {
                    amount: 1,
                    name: "Utility Set"
                }, {
                    amount: 1,
                    name: "Yellow Set"
                }, {
                    amount: 1,
                    name: "Orange Set"
                }, {
                    amount: 1,
                    name: "Brown Set"
                }, {
                    amount: 1,
                    name: "Purple Set"
                }, {
                    amount: 1,
                    name: "Railroad Set"
                }, ],

                wildcard: [{
                    amount: 2,
                    name: "Purple and Orange"
                }, {
                    amount: 1,
                    name: "Light Blue and Brown"
                }, {
                    amount: 1,
                    name: "Light Blue and Railroad"
                }, {
                    amount: 1,
                    name: "Dark Blue and Green"
                }, {
                    amount: 1,
                    name: "Railroad and Green"
                }, {
                    amount: 2,
                    name: "Red and Yellow"
                }, {
                    amount: 1,
                    name: "Utility and Railroad"
                }, {
                    amount: 10,
                    name: "Wildcard"
                }, ],

                rent: [{
                    amount: 2,
                    name: "Purple and Orange"
                }, {
                    amount: 2,
                    name: "Railroad and Utility"
                }, {
                    amount: 2,
                    name: "Green and Dark Blue"
                }, {
                    amount: 2,
                    name: "Brown and Light Blue"
                }, {
                    amount: 2,
                    name: "Red and Yellow"
                }, {
                    amount: 3,
                    name: "ten color wild"
                }, ],

                money: [{
                    amount: 1,
                    name: "$10"
                }, {
                    amount: 2,
                    name: "$5"
                }, {
                    amount: 3,
                    name: "$4"
                }, {
                    amount: 4,
                    name: "$3"
                }, {
                    amount: 5,
                    name: "$2"
                }, {
                    amount: 6,
                    name: "$1"
                }, ]
            };
        }
    });
})();
